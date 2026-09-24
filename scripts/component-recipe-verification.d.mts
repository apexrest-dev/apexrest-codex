export function assertPinnedCompilerVersion(expected: unknown, actual: unknown): void;

export function reusableCompilerRun(options: {
  recipe: {
    id: string;
    readiness: string;
    verification?: {
      compiler?: {
        status?: string;
        sourceSha256?: string;
        scaffoldSha256?: string;
        mmdVersion?: string;
      };
    };
  };
  evidence: {
    mock?: boolean;
    compiler?: string;
    mmdVersion?: string;
    scaffoldSha256?: string;
    scaffoldFiles?: Record<string, string>;
  };
  run?: {
    recipeId?: string;
    passed?: boolean;
    sourceSha256?: string;
    inputFiles?: Record<string, string>;
    inputUnchanged?: boolean;
    exitCode?: number;
    output?: string;
  };
  inputFiles: Record<string, string>;
  scaffoldFiles: Record<string, string>;
  scaffoldSha256: string;
  compilerVersion: string;
  mmdVersion: string;
}): boolean;
