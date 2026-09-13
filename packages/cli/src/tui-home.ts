import type { Command } from './tui-catalog.ts';
import { filterApexlang, type ApexlangCatalogue } from './tui-apexlang.ts';
import { brand, clip, padCell, paint, type Tone } from './tui-view.ts';

export interface HomeState {
  width: number;
  height: number;
  color: boolean;
  actions: Command[];
  selected: number;
  query: string;
  focus: 'actions' | 'apexlang';
  catalogue?: ApexlangCatalogue | undefined;
  catalogueError: boolean;
  catalogueQuery: string;
  catalogueSelected: number;
}

function startAt(selected: number, length: number, room: number) {
  return Math.min(Math.max(0, selected - Math.floor(room / 2)), Math.max(0, length - room));
}

export function homeFrame(state: HomeState): string[] {
  const { width, height, color, focus } = state;
  const styled = (text: string, tone: Tone = 'plain', size = width) => paint(clip(text, size), tone, color);
  const header = brand(color, width < 62 || height < 28);
  if (height >= 18) header.push('');
  header.push(
    styled(
      focus === 'apexlang'
        ? state.catalogueQuery
          ? ` Find APEXlang: ${state.catalogueQuery}`
          : ' Browse supported APEXlang components'
        : state.query
          ? ` Search: ${state.query}`
          : ' What would you like to do?',
      'accent',
    ),
  );
  if (height >= 18) header.push('');
  const room = height - header.length - 2;
  const actionRows = (size: number, count: number) => {
    const start = startAt(state.selected, state.actions.length, count);
    const rows = state.actions
      .slice(start, start + count)
      .map((action, index) =>
        styled(
          `${focus === 'actions' && start + index === state.selected ? '> ' : '  '}${action.label}`,
          focus === 'actions' && start + index === state.selected ? 'selected' : 'plain',
          size,
        ),
      );
    if (!state.actions.length) rows.push(styled(' No matching actions. Esc clears search.', 'muted', size));
    while (rows.length < count) rows.push('');
    return rows;
  };
  const catalogueRows = (size: number, count: number) => {
    const active = focus === 'apexlang';
    const catalogue = state.catalogue;
    const rows = [
      styled(
        ` ${active ? '●' : '○'} APEXlang${catalogue ? ` · ${catalogue.items.length} types · ${new Set(catalogue.items.map((item) => item.group)).size} groups` : ''}`,
        active ? 'accent' : 'muted',
        size,
      ),
    ];
    if (state.catalogueError || !catalogue) {
      rows.push(
        styled(
          state.catalogueError ? ' Catalogue unavailable.' : ' Loading bundled catalogue…',
          'muted',
          size,
        ),
      );
      if (state.catalogueError && count >= 3)
        rows.push(styled(' Ctrl+R retries the local file.', 'muted', size));
    } else {
      const items = filterApexlang(catalogue, state.catalogueQuery);
      const groupWidth = size >= 55 ? 23 : 0;
      const nameWidth = size - groupWidth - 10;
      const tableRow = (name: string, group: string, docs: string, marker = '  ') =>
        marker +
        padCell(name, nameWidth) +
        ' │ ' +
        (groupWidth ? padCell(group, groupWidth - 3) + ' │ ' : '') +
        docs.padStart(4);
      const table = count >= 5;
      if (table) rows.push(styled(tableRow('Item / component', 'Group', 'Docs'), 'muted', size));
      const available = Math.max(1, count - (table ? 4 : 1));
      const selected = Math.max(0, Math.min(state.catalogueSelected, items.length - 1));
      const start = startAt(selected, items.length, available);
      for (const [offset, item] of items.slice(start, start + available).entries()) {
        const selectedRow = active && start + offset === selected;
        rows.push(
          styled(
            table
              ? tableRow(item.name, item.group, String(item.documents), selectedRow ? '> ' : '  ')
              : ` ${selectedRow ? '>' : ' '} ${item.name}`,
            selectedRow ? 'selected' : 'plain',
            size,
          ),
        );
      }
      if (!items.length) rows.push(styled(' No matching components.', 'muted', size));
      if (table) {
        while (rows.length < count - 2) rows.push('');
        rows.push(
          styled(
            ` ${items.length ? `${start + 1}–${Math.min(start + available, items.length)}` : '0'} / ${items.length} · ${groupWidth ? catalogue.version : (items[selected]?.group ?? catalogue.version)}`,
            'muted',
            size,
          ),
        );
        rows.push(styled(' Bundled Oracle refs · validate locally', 'muted', size));
      }
    }
    while (rows.length < count) rows.push('');
    return rows.slice(0, count);
  };

  let body: string[];
  if (width >= 108) {
    const leftWidth = 38,
      rightWidth = width - leftWidth - 3;
    const left = actionRows(leftWidth, room),
      right = catalogueRows(rightWidth, room);
    body = left.map(
      (line, index) =>
        line + ' '.repeat(leftWidth - clip(line, leftWidth).length) + styled(' │ ', 'muted') + right[index],
    );
  } else if (focus === 'apexlang') {
    body = catalogueRows(width, room);
  } else {
    const actionCount = Math.min(Math.max(1, state.actions.length), Math.max(1, room - 2));
    const gap = room - actionCount >= 5 ? 1 : 0;
    body = [
      ...actionRows(width, actionCount),
      ...(gap ? [''] : []),
      ...catalogueRows(width, room - actionCount - gap),
    ];
  }
  const footer =
    width < 44
      ? focus === 'apexlang'
        ? ' Tab Actions  ↑↓ Type  Esc'
        : ' Tab APEXlang ↑↓ Enter  Esc'
      : width < 64
        ? focus === 'apexlang'
          ? ' Tab Actions  ↑↓ Scroll  Type Search  Esc'
          : ' Tab APEXlang  ↑↓ Enter  Type Search  Esc'
        : focus === 'apexlang'
          ? ' Tab Actions  ↑↓ PgUp/PgDn  Type Search  Esc Back'
          : ' Tab APEXlang  ↑↓ Move  Enter Open  Type Search  Esc Quit';
  return [...header, ...body, styled('─'.repeat(width), 'muted'), styled(footer, 'muted')].slice(0, height);
}
