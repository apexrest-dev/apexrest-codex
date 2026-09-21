(() => {
  // packages/core/src/team-identity.ts
  var teamIdentities = {
    manager: { name: "Mewtwo", pokemon: 150, label: "Project manager" },
    "developer-1": { name: "Pikachu", pokemon: 25, label: "Developer 1" },
    "developer-2": { name: "Charmander", pokemon: 4, label: "Developer 2" },
    "developer-3": { name: "Bulbasaur", pokemon: 1, label: "Developer 3" },
    qa: { name: "Squirtle", pokemon: 7, label: "Independent QA" }
  };
  var teamLabel = (role) => role === "user" ? "You" : teamIdentities[role].name + " \xB7 " + teamIdentities[role].label;

  // packages/panel/assets/mewtwo.png
  var mewtwo_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAAAAAAA5IFI5OVJqMZyDe5yUQb20Su60rMXe1ebu5u7////IHWIfAAAAAXRSTlMAQObYZgAAAytJREFUWMPtlrFu2zAQhqmoKjpKsQXIY42gswMmhYUuMSo4HaOqBKysdfUIzWyoBKhugSuA17VL7Vfoy/VIKXYLWBQ9FF18i5T4Pt79pzuShJzsZCf7r/aCM/Xw2J0l4MFaPXKo238kSdIDwJ0GeOtfFEVyYwYmChAN8KxIgqRYmkIA1Ixeg2g0zJcBIcPCNwA5sA3UUkyaADP1GM5MQL3dQi6FXvR5s7ZjBO4RgBaYLxsgMeTEtgoQLdAuPewGvHy73SggVH+9sgDuQZkQK6X5KRUTgPl83zAEsExnO6BbtYvA9keNQLkHnMQA/ISvmze/hCgXEzuAQ/74WgHsT8BQ12lVpZ9Q9CXjCMz6gWtVIiH4JMx2wNAEONq/pCRMCbmwAQTnjDLfYehz0TgaAS9kA8pSEv4FmLrPGfguS50AM2pFoGYTQHB+eBqJwBbwcOQqKbiK0ORkrKoaOTRZBraAG4NE4JoFDTDrGVEnjKECKBnLw70IQ1EjHkuMUGYsf/TJ7lt3+o8ki+saREhpDo8BOQs6088mxMtiENStueChT4IRgB/LrmFjgtMYYE2x/Rilqe4qWMdwdRjIqK7mCv1JJDhTAB2tp0IeBjxVGZAD/SPqUH3kQTlF9HBKblVjPo9NYSsEMIKLuxnP6GHRriizXLbz+CXhKgQC+LzqqBKdUMn1T+7lvHjHKPcdkYbdAK7HqX6Jvz0Uy6ySKcnOX2aLdRfgQNDKv30oChTEz8dJElRw2TmZfturLVCneLq97QZI8NTct5+Lj9ACybSc9R2iMC8agA1ViKsbW4BrwDxrO2CmAZ3TrO9gzyUCyQjU17YIgJ3HP6BbKFgD9AbAS8Z75ccaYNYbgLiMjVUIDQT9/mp82PhCh0gDq+sMhvDPxuMB00NhB+BxqAk7gERMXzNw+04tAd4AjiWAw9e+hUcDdiKm+tLQ5GQDuJXMjgLwOtnOHqr3LToJN+4WcIToVe0tKpCrtiMcLrJewWUOTwkRJxLtJzQAuN2v9vuI4H0ALip2PhGIat2XkxMMdq8VLPBEsb/mIxCBPAIg0crZC7IKgcfcMQFOdrJ/ar8BJycwp3/4ZdUAAAAASUVORK5CYII=";

  // packages/panel/assets/pikachu.png
  var pikachu_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAKlBMVEUAAAAAAAApKSlBQUpiMQhzc4OcUgDFIBjelADmWkH2vSD25lL/9qT////Vai+KAAAAAXRSTlMAQObYZgAAAdlJREFUWMPtlsFqwkAQhjclhB6ztRRReqiHXnoSbz0piLX2JcwliD6A0JsgEuoDlNJTQKzsnkJpSDN9A3PpG3U2ST12J4dCKftjNML/MTObndkwZmRkZPTX5Vb0Wxe/DrQq5nRSHehWBK4PQKtFAWpiU9wctTodygI0SsCZQqfTJgK+P3ZmgAClfltsJ9k+Qf8bKQACQZZlgHptqwC+lhh+ZNleAVz5HRjrAEwGUi4Tr/wX61JaSMzm8wrygo9BD5wjENVKYI3hNDnZbRiqlHJfAHrAuVQmeH9eqooJwB3AABN5egyL+rVF3MrldDtJ5/OwDKADbkSuHJAVgJf7kE1FTmg2lCNKheoOCa7froU2OSo5owLSHeG33s+aJQCuTfKzJhQBsNjRlpEAJHZSrY4tKBNkHeNSqk3XZXUKYEFSApH18D1BfgYAmwZ7CKJhsOsRgHUB7CAMgj5lGM9AIfgJ6wtGA2Ko45UK7lPmUjPGmRThlQr3zCMAM/BxhXz1MLhPAKyiBwCkEH2PkJIlCn+apiKklGDlPQBCYoSQdKBMxUG0o6hx8O9oh53VEAHnqndIj42x/kotpjWYrGgB7Djp5c6R8GgR+Gn5G0cVXwl41bcUIyMjo/+qLw92FGczGN4XAAAAAElFTkSuQmCC";

  // packages/panel/assets/charmander.png
  var charmander_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAALVBMVEUAAAAIOYsQEBAYi7QxrO6LKQDeUjnmOQDmrFr2pAD/lEH/xWL/1Qj/1Xv///8NIPGPAAAAAXRSTlMAQObYZgAAAchJREFUWMPtlb9Lw0AUx49A7FwQB6dyYggdOol/h8ulpaDDQY4QF7dQ6FSwHILgFgouFsxwgoOj/gFFyCwi3CJ08a/wXX6s3ouTyH2HJMP75N67+753hDg5OTk5/UntxKxbfKpUJ+JcgQYdFnh5/g2wxgPpg1JFJwD+n6oCn9OeAfoCDxwDcNeP8MAXAI8HHYChAXZb4MIa7+8DcH/U1jC3A9UxiC6A2dS4AXq39hqmsEAccfgCB/bKGytAwasjwQlj3KywsWV0QijNIhEzpQywebUAXsyCmIkADFJAHVlWWjbWSxUfFlQI2ChKSJbP85+BACI5xINM3fNNaSnCC0QjbjZ2VtoAQ8SJFIJVBzFblTmxErGUy7TuoF6+yqwH4UVav7ctl43t9iMTrXXbcv4YYfBTAzRzw39CA3VOPmIa+NcAXDXAFANAvP6oAWYMZRMzwJspwmeYceMXJqUlmJVBayQIQCVaS3DrGhyYLDBTYyKlAQqwlRxggHUNiEDIBWouFaGUEfRPKBeYceZBQ4QyAoOHlyeo0Qepc3oID4aLB8D0TiQ4crZ6dXNOFRYYnVVTL0LfKR6l1Wu7/ex2vVM6IE5OTk7/Ud/V9spBc5Q2fAAAAABJRU5ErkJggg==";

  // packages/panel/assets/bulbasaur.png
  var bulbasaur_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAMFBMVEUAAAAQEBAYSkoxc3M5lJRSYili1bRzrDGD7sWk1UGsADG9/3PNzc3uIDn/amL///87EAzGAAAAAXRSTlMAQObYZgAAAZ1JREFUWMPtlL9Lw0AUx9NUce1JwMGlLUfbrdAGcVAkl0fI5iSloxiOrg4hiJuWcP+AlPwLASm4lWzB0dG9/0HAunbwpbjfq6PcZ/5+8n5weZZlMBgMhv/F4b75KaOHj5L4ZppMWuT8Y1Gssge6gPmiSLKYINjtukBRvJ0kK5IQPrXHyGhwWxTZyz1BUGOlUjlQOyHRlwhDpSCUKq2FBWFqX6k5hKmU0Wkt6Hs6xwKgdsIqW8Q0IVQpoJBlSawdojmYKRz6+aMHXrYgCPZnqubh7HJZgtdPiALUwmYnTLTCxTpUoObrfAtCUISrZYAzRMtqCz7040S7pbM8kLjSvHoHANHXCx35C/Da0D8NfiyDO8yPGLjQhY7+dV/nUt512DdgiS4X+tfK/bzGBYEdcWhrhYbjv1aVC54D2BRBQAOnBeaAK7CKR/hHPYagwz0cgiAcyAg3KiQIhyZYrsQoD6I9BPAYh1oQQDlMgYw8K0Ch4bouRWhGtSCjll2WJeXqDYe8ZfUC7IYx0qlsMGbZm83Xfqee+HGDwWAwGP7KD5Vqm0oTWykbAAAAAElFTkSuQmCC";

  // packages/panel/assets/squirtle.png
  var squirtle_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAMFBMVEUAAAAQEBApc4NanKRiKQCDKQCLxc205u69agDNeynVlFLVzc3mrFr/1Wr/5pz///8R5ETqAAAAAXRSTlMAQObYZgAAAb1JREFUWMPtlL9KxEAQxi/JC2QvnihaeAkXCwtNBheus7eUPIBZXLGy82ohnZVi4cIl76A2h1ZqJaz2Bxd7C1PoCzgr9jcpBIv9uoX5sfPnm+l0rKysrKz+pwDCdvGjkWxDeBgv5RodWB+dIJCT491D80GLL1wMFm2ACIM5cJlSgYH5YeVWJFRgk0u5z26ADAwM0PukA31M6bgF4JqmHvS+yIBzwjEnAfSUumZqEIHvhZRRbG05iyIMB3uwxkmdjVOW9JTKIOEy8glOxWyC7SyDtCtzCmCMtB9hxcu3kjZrdJJIGVvVsaT1yQWAcV3rRy7AJ3U1hGFZT9UFprWDL8KqsuG7GtfTCJaKTigFYRbVx2vzMX1gk8LFmRPWomoQ0Hp3UkS03f4BSgROgeexmF+6equaaa3PJgsAcU4AqmelVT27uisg5ZLQ3Kqpmlk5u7w/hYTicq80NTw/pRtEgB/VL9glvDPXAMH8jDx5pJXWT+gpY0JGMTjWrB8RCCjxxuDbWqsLBPqMYj8HbZppfc4l9QwEmHnGWES+GxjJfjnaIRNxYlJ3cJNoG8ScnzhHLPb9Thv9glZWVlZWf69vfHii3k2wjfUAAAAASUVORK5CYII=";

  // packages/panel/src/avatars.ts
  var avatars = {
    manager: mewtwo_default,
    "developer-1": pikachu_default,
    "developer-2": charmander_default,
    "developer-3": bulbasaur_default,
    qa: squirtle_default
  };

  // plugins/apexrest-apex/assets/apexrest-logo.svg
  var apexrest_logo_default = `data:image/svg+xml,<?xml version='1.0' encoding='utf-8'?>%0A<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="100 66 98 98" xml:space="preserve" width="98" height="98" role="img" aria-labelledby="logo-title">%0A  <title id="logo-title">APEXREST pencil and ruler symbol</title>%0A  <style type="text/css">%0A%09.st0{fill:%2331BEF9;}%0A%09.st1{fill:%23FFD541;}%0A%09.st2{fill:%23FF4141;}%0A%09.st3{fill:%231E1E1E;}%0A</style>%0A  <g id="\u0421\u043B\u043E\u0439_2">%0A    <polygon class="st0" points="133,149 177,106 160,89 116,132  " />%0A  </g>%0A  <g id="\u0421\u043B\u043E\u0439_3">%0A    <polygon class="st1" points="128,114 147,95 128,76 126,75 123,76 108,91 107,93 110,97 127,114  " />%0A    <polygon class="st1" points="151,137 170,118 189,137 190,140 189,142 186,146 173,157 170,157  " />%0A  </g>%0A  <g id="\u0421\u043B\u043E\u0439_4">%0A    <path class="st2" d="M166,83l16,16l4-3l2-5v-4c0,0-1-2-1-3s-3-4-3-4l-5-3h-3h-3l-3,2l-2,2L166,83L166,83z" />%0A  </g>%0A  <g id="\u0421\u043B\u043E\u0439_1">%0A    <g>%0A      <path class="st3" d="M126.7,115.5l1.7-1.7l-2.2-2.2l4.3-4.3c0.5-0.5,0.4-1.3-0.1-1.7c-0.5-0.4-1.2-0.4-1.7,0l-4.3,4.3l-4.1-4.1    l4.3-4.3c0.5-0.5,0.4-1.3-0.1-1.7c-0.5-0.4-1.2-0.4-1.7,0l-4.3,4.3l-4.1-4.1l9.4-9.5c0.5-0.5,0.4-1.3-0.1-1.7    c-0.5-0.4-1.2-0.4-1.7,0l-9.5,9.5l-3.6-3.6c-0.8-0.8-0.8-2,0-2.8L123.9,77c0.8-0.8,2-0.8,2.8,0L146,96.2l1.7-1.7l-19.2-19.2    c-1.7-1.7-4.6-1.7-6.3,0L107.5,90c-1.7,1.7-1.7,4.6,0,6.3L126.7,115.5z" />%0A      <path class="st3" d="M182.7,100.8l3-3c5-5.1,4.9-13.3-0.2-18.3c-5-5-13.1-5-18.2,0l-51.9,51.9c-0.1,0.1-0.2,0.2-0.2,0.4v0.1    l-7.2,23.8c-0.2,0.6,0.2,1.3,0.8,1.5c0.2,0.1,0.5,0.1,0.7,0l23.8-7.2h0.1c0.1-0.1,0.2-0.1,0.4-0.2L182.7,100.8L182.7,100.8z     M159.3,91l6.6,6.6l-41.3,41.3l-6.6-6.6L159.3,91z M110.9,154.2l1-3.5c1.1,0.5,2,1.3,2.5,2.4L110.9,154.2z M116.9,152.4    c-0.8-1.8-2.4-3.2-4.2-4l4.2-13.9l13.7,13.7L116.9,152.4z M132.9,147.1l-6.6-6.6l41.3-41.3l6.6,6.6L132.9,147.1z M175.9,104.1    l-7.4-7.4l-7.4-7.4l4.2-4.2l14.9,14.9L175.9,104.1z M167,83.3l2.1-2.1c4.3-4,10.9-3.7,14.9,0.6c3.7,4,3.7,10.3,0,14.3l-2.1,2.1    L167,83.3z" />%0A      <path class="st3" d="M189.9,136.7l-19.2-19.2l-1.7,1.7l19.2,19.2c0.8,0.8,0.8,2,0,2.8l-14.7,14.7c-0.8,0.8-2.1,0.8-2.8,0l-3.6-3.6    l9.5-9.5c0.5-0.4,0.6-1.2,0.2-1.7c-0.4-0.5-1.2-0.6-1.7-0.2c-0.1,0.1-0.1,0.1-0.2,0.2l-9.5,9.5l-4.1-4.1l4.3-4.3    c0.5-0.5,0.5-1.2,0.1-1.7c-0.5-0.5-1.2-0.5-1.7-0.1c0,0,0,0-0.1,0.1l-4.3,4.3l-4.1-4.1l4.3-4.3c0.5-0.5,0.4-1.3-0.1-1.7    c-0.5-0.4-1.2-0.4-1.7,0l-4.3,4.3l-2.2-2.2l-1.8,1.7l19.2,19.2c1.7,1.7,4.6,1.7,6.3,0l14.7-14.7    C191.6,141.3,191.6,138.4,189.9,136.7C189.9,136.7,189.9,136.7,189.9,136.7z" />%0A    </g>%0A  </g>%0A</svg>%0A`;

  // packages/panel/src/panel.ts
  var $ = (id) => document.getElementById(id);
  var input = (id) => $(id);
  var node = (tag, cls = "", text = "") => {
    const element = document.createElement(tag);
    element.className = cls;
    element.textContent = text;
    return element;
  };
  var human = (value) => value === "qa" ? "QA" : value === "inProgress" ? "Working" : value.replaceAll("_", " ").replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  var active = (s) => ["running", "queued", "inProgress", "cancelling"].includes(s);
  var badge = (value) => node(
    "span",
    "badge " + (["completed", "pass", "passed", "approve", "succeeded", "live"].includes(value) ? "good" : active(value) ? "running" : [
      "failed",
      "fail",
      "blocked",
      "review_failed",
      "verification_failed",
      "outcome_unknown",
      "unavailable"
    ].includes(value) ? "bad" : ["revise", "review_stale", "result_stale", "not_run", "cancelled"].includes(value) ? "warn" : ""),
    human(value)
  );
  var empty = (message) => node("div", "empty", message);
  var card = (title, content, subtitle) => {
    const box = node("div", "card"), heading = node("div", "section-heading"), label = node("div");
    label.append(node("h2", "", title));
    if (subtitle) label.append(node("p", "subtle", subtitle));
    heading.append(label);
    box.append(heading, content);
    return box;
  };
  var kv = (items) => {
    const dl = node("dl");
    for (const [key, value] of items) {
      const row = node("div", "kv");
      row.append(node("dt", "", key), node("dd", "", value == null ? "Not available" : String(value)));
      dl.append(row);
    }
    return dl;
  };
  var codeDetails = (title, value) => {
    const d = node("details");
    d.append(node("summary", "", title), node("pre", "", JSON.stringify(value, null, 2)));
    return d;
  };
  var notice = (message, error = false) => {
    const box = $("notice");
    box.hidden = !message;
    box.classList.toggle("error", error);
    box.textContent = message;
  };
  var launch = new URLSearchParams(location.hash.slice(1));
  var snapshot;
  var chosenTeam = launch.get("team") ?? void 0;
  var busy = false;
  var connected = false;
  var initialized = false;
  var sqlclDirty = false;
  var sqlclSignature = "";
  var preferencesDirty = false;
  var preferencesSignature = "";
  var bridgeProject;
  var bridgeReady = false;
  var requestId = 0;
  var currentView = "overview";
  var savedConnectionsState = "idle";
  var savedConnectionNames = [];
  var savedConnectionsError = "";
  var embedded = window.parent !== window;
  var token = launch.get("session") ?? "";
  var pending = /* @__PURE__ */ new Map();
  function bridge(method, params) {
    const id = ++requestId;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(new Error("Codex did not answer the panel request."));
      }, 2e4);
      pending.set(id, { resolve, reject, timer });
      window.parent.postMessage({ jsonrpc: "2.0", id, method, params }, "*");
    });
  }
  window.addEventListener("message", (event) => {
    if (event.source !== window.parent || !embedded || !event.data || event.data.jsonrpc !== "2.0") return;
    const message = event.data;
    const waiter = pending.get(message.id);
    if (waiter) {
      clearTimeout(waiter.timer);
      pending.delete(message.id);
      if (message.error) waiter.reject(new Error(String(message.error.message)));
      else waiter.resolve(message.result);
    }
    if (message.method === "ui/notifications/tool-input" && typeof message.params?.arguments?.project === "string")
      bridgeProject = message.params.arguments.project;
    if (message.method === "ui/notifications/tool-result") {
      const result = message.params?._meta?.["apexrest/panelResult"] ?? message.params?.structuredContent;
      if (typeof result?.data?.project === "string") bridgeProject = result.data.project;
      if (bridgeProject) void refresh();
    }
  });
  async function api(action) {
    if (embedded) {
      if (action?.kind === "connection" && action.password)
        throw new Error("Enter the password in the local dashboard or use CLI --password-file.");
      if (!bridgeReady || !bridgeProject) throw new Error("Waiting for the Codex workspace context.");
      const response2 = await bridge("tools/call", {
        name: action ? "apexrest_panel_action" : "apexrest_panel_status",
        arguments: {
          project: bridgeProject,
          ...action ? { action } : chosenTeam ? { team: chosenTeam } : {}
        }
      });
      const envelope = response2._meta?.["apexrest/panelResult"] ?? response2.structuredContent ?? JSON.parse(response2.content?.find((c) => c.type === "text")?.text ?? "{}");
      if (!envelope.ok) throw new Error(envelope.summary ?? "Codex rejected this panel action.");
      return envelope.data;
    }
    const response = await fetch(
      action ? "/api/action" : "/api/status" + (chosenTeam ? "?team=" + encodeURIComponent(chosenTeam) : ""),
      {
        method: action ? "POST" : "GET",
        headers: {
          Authorization: "Bearer " + token,
          ...action ? { "Content-Type": "application/json" } : {}
        },
        ...action ? { body: JSON.stringify(action) } : {},
        signal: AbortSignal.timeout(action?.kind === "saved-connections" ? 6e4 : 15e3)
      }
    );
    const result = await response.json();
    if (!response.ok) throw new Error(result.summary ?? result.error ?? "The local panel request failed.");
    return result;
  }
  function renderSavedConnections(selected = input("connection-direct").value) {
    const select = $("connection-direct"), current = snapshot?.connections[input("connection-ref").value.trim()]?.name, selectedCurrent = !!current && selected === current, names = [
      .../* @__PURE__ */ new Set([...savedConnectionNames, ...current ? [current] : [], ...selected ? [selected] : []])
    ];
    const placeholder = node("option", "", "Choose a saved connection");
    placeholder.value = "";
    select.replaceChildren(
      placeholder,
      ...names.map((name) => {
        const retained = !savedConnectionNames.includes(name);
        const label = retained && savedConnectionsState === "loaded" ? `${name} \xB7 ${name === current ? "current mapping" : "previous selection"} (not in SQLcl list)` : retained && name === current ? `${name} \xB7 current mapping` : name;
        const option = node("option", "", label);
        option.value = name;
        return option;
      })
    );
    select.value = selected;
    select.disabled = savedConnectionsState === "loading";
    const status = $("saved-connections-status");
    status.dataset.state = savedConnectionsState;
    status.textContent = savedConnectionsState === "loading" ? "Loading saved connections from SQLcl\u2026" : savedConnectionsState === "error" ? "Could not load saved SQLcl connections. " + savedConnectionsError + " Use Retry to try again." : savedConnectionsState === "loaded" ? savedConnectionNames.length ? `${savedConnectionNames.length} saved SQLcl connection${savedConnectionNames.length === 1 ? "" : "s"} loaded.${selectedCurrent && !savedConnectionNames.includes(current) ? " The current mapping is retained even though SQLcl did not list it." : ""}` : "No saved SQLcl connections found. Save a direct connection in SQLcl, then refresh." + (selectedCurrent ? " The current mapping is retained." : "") : snapshot && !snapshot.trusted ? "Trust this project before loading saved SQLcl connections." : "Saved connections load when you open Direct connection settings.";
    $("saved-connections-refresh").textContent = savedConnectionsState === "loading" ? "Loading\u2026" : savedConnectionsState === "error" ? "Retry" : savedConnectionsState === "idle" ? "Load saved connections" : "Refresh saved connections";
    controls();
  }
  async function loadSavedConnections(force = false) {
    if (!connected || !snapshot?.trusted || busy || savedConnectionsState === "loading" || !force && savedConnectionsState === "loaded")
      return;
    savedConnectionsState = "loading";
    savedConnectionsError = "";
    renderSavedConnections();
    try {
      const result = await api({ kind: "saved-connections" });
      if (result.source !== "sqlcl-store" || !Array.isArray(result.connections) || result.connections.some((connection) => typeof connection?.name !== "string" || !connection.name))
        throw new Error("SQLcl returned an invalid connection list.");
      savedConnectionNames = result.connections.map((connection) => connection.name);
      savedConnectionsState = "loaded";
    } catch (error) {
      savedConnectionsState = "error";
      savedConnectionsError = error instanceof Error ? error.message : String(error);
    }
    renderSavedConnections();
  }
  function controls() {
    const canAct = connected && !!snapshot?.trusted && !busy;
    for (const id of ["new-task", "validate", "run-tests", "plan"])
      $(id).disabled = !canAct || !snapshot?.configured;
    for (const form of ["sqlcl-form", "connection-form", "preferences-form", "task-form"])
      $(form).querySelectorAll("button[type=submit]").forEach((button) => {
        button.disabled = !canAct;
      });
    $("saved-connections-refresh").disabled = !canAct || savedConnectionsState === "loading";
    $("connection-save").disabled = !canAct || input("sqlcl-transport").value === "direct" && savedConnectionsState === "loading";
    $("message-form").querySelectorAll("button").forEach((b) => {
      b.disabled = !canAct || !snapshot?.team || !active(snapshot.team.status);
    });
  }
  async function act(action) {
    if (busy || !connected) return;
    busy = true;
    controls();
    try {
      const result = await api(action);
      if (action.kind === "start" && result.teamId) {
        chosenTeam = result.teamId;
        $("task-dialog").close();
        view("team");
      }
      notice(
        result.executionHost === "current_session" ? "Continue this task in your current Codex chat. No background agent was started." : ["sqlcl", "connection", "preferences"].includes(action.kind) ? "Settings saved for future runs." : action.kind === "message" ? "Task update queued for the active workflow." : action.kind.startsWith("cancel") ? "Stop requested. Existing changes are not rolled back." : "Operation accepted. Follow its actual status below."
      );
      if (action.kind === "message") input("message").value = "";
      if (action.kind === "preferences") preferencesDirty = false;
      if (action.kind === "sqlcl") sqlclDirty = false;
      if (action.kind === "connection") input("connection-ords-password").value = "";
      await refresh();
    } catch (error) {
      notice(error instanceof Error ? error.message : String(error), true);
    } finally {
      busy = false;
      controls();
    }
  }
  var rendered = /* @__PURE__ */ new Map();
  function draw(id, data, render2) {
    const key = JSON.stringify(data);
    if (rendered.get(id) === key) return;
    if ($(id).contains(document.activeElement) && document.activeElement !== document.body) return;
    $(id).replaceChildren(...render2());
    rendered.set(id, key);
  }
  function pipeline(data) {
    const team = data.team, box = node("div");
    if (!team) {
      box.append(empty("No run yet. Start a task to follow its agents, tools and verification here."));
      return card("Development workflow", box);
    }
    const head = node("div", "section-heading");
    if (data.task) box.append(node("p", "task-summary", data.task));
    if (team.executionHost === "current_session") {
      box.append(
        node(
          "p",
          "",
          "Continue in your current Codex chat. This is a task receipt, not a completed result. Progress, verification, steering and cancellation stay in that conversation."
        )
      );
      return card("Current Codex session", box);
    }
    head.append(node("h3", "", "Revision " + team.revision), badge(team.status));
    box.append(head);
    if (team.modelPolicy)
      box.append(
        node(
          "p",
          "subtle",
          "Auto models \xB7 " + team.modelPolicy.complexity + " task \xB7 " + team.modelPolicy.reason
        )
      );
    if (team.limits)
      box.append(
        node(
          "p",
          "subtle",
          "Task time limit: " + team.limits.timeoutSeconds + " seconds. Token counts are cumulative, including cached input; they are not a cost estimate."
        )
      );
    const stages = team.executionMode === "single" ? ["planning", "development", "verification"] : ["planning", "development", "code_review", "qa", "final_review"], index = stages.indexOf(team.phase);
    const bar = node("div", "steps");
    stages.forEach(
      (phase, i) => bar.append(
        node(
          "div",
          "step " + (team.status === "completed" || i < index ? "done" : i === index ? "active" : ""),
          human(phase)
        )
      )
    );
    box.append(bar);
    const agents = node("div", "agents");
    for (const member of team.members) {
      const cell = node("article", "agent"), title = node("div", "agent-title"), label = node("h3"), avatar = node("img", "avatar"), identity = teamIdentities[member.role];
      avatar.src = avatars[member.role];
      avatar.alt = identity.name;
      avatar.width = 64;
      avatar.height = 64;
      label.append(
        node("span", "", member.name ?? identity.name),
        node("small", "subtle", team.executionMode === "single" ? "Single agent" : identity.label)
      );
      title.append(avatar);
      title.append(label);
      cell.append(
        title,
        badge(member.status),
        node(
          "p",
          "agent-action",
          member.currentAction?.title ?? (member.status === "completed" ? "Assigned step completed" : member.status === "inProgress" ? "Working on the current phase" : "Waiting for the scheduled step")
        )
      );
      const meta = node("div", "agent-meta");
      meta.append(
        node("span", "", member.configuration?.model ?? "Model not reported"),
        node(
          "span",
          "",
          [
            member.configuration?.reasoningEffort,
            member.configuration?.sandbox,
            member.totalTokens == null ? "" : member.totalTokens.toLocaleString() + " cumulative tokens"
          ].filter(Boolean).join(" \xB7 ")
        )
      );
      if (member.selection)
        meta.append(node("span", "", "Auto \xB7 " + member.selection.tier + " \xB7 " + member.selection.reason));
      if (member.tokenUsage)
        meta.append(
          node(
            "span",
            "",
            [
              member.tokenUsage.inputTokens == null ? "" : "Input " + member.tokenUsage.inputTokens.toLocaleString(),
              member.tokenUsage.cachedInputTokens == null ? "" : "Cached input " + member.tokenUsage.cachedInputTokens.toLocaleString(),
              member.tokenUsage.outputTokens == null ? "" : "Output " + member.tokenUsage.outputTokens.toLocaleString(),
              member.tokenUsage.reasoningOutputTokens == null ? "" : "Reasoning output " + member.tokenUsage.reasoningOutputTokens.toLocaleString()
            ].filter(Boolean).join(" \xB7 ")
          )
        );
      cell.append(meta);
      agents.append(cell);
    }
    box.append(agents);
    if (team.diagnostics.length) box.append(node("p", "notice error", team.diagnostics.join("\n")));
    if (team.result) box.append(node("p", "notice", team.result));
    return card(
      "Development workflow",
      box,
      (team.executionMode === "single" ? "Single agent \xB7 implementation and self-verification" : "Agent team \xB7 mandatory manager and QA reviews") + " \xB7 Browser: " + (team.browserMode === "external" ? "External" : "Codex in-app")
    );
  }
  function reviews(data) {
    const box = node("div"), team = data.team;
    if (team?.executionMode === "single")
      box.append(
        node(
          "p",
          "subtle",
          "Checks performed by the implementation agent. Independent manager review and QA are not part of this run."
        )
      );
    if (!team?.reviews.length && !team?.qa.length && !team?.verification?.length)
      box.append(empty("Review evidence appears after development."));
    for (const item of team?.reviews ?? []) {
      const row = node("div", "review"), head = node("div", "section-heading");
      head.append(
        node("h3", "", human(item.phase) + " \xB7 revision " + item.revision),
        badge(item.report.decision)
      );
      row.append(head, node("p", "", item.report.summary));
      const list = node("ul");
      item.report.findings.forEach((finding) => list.append(node("li", "", finding)));
      if (list.childNodes.length) row.append(list);
      box.append(row);
    }
    for (const item of team?.executionMode === "single" ? team.verification ?? [] : team?.qa ?? []) {
      const row = node("div", "review"), head = node("div", "section-heading");
      head.append(
        node(
          "h3",
          "",
          (team?.executionMode === "single" ? "Agent verification \xB7 revision " : "Independent QA \xB7 revision ") + item.revision
        ),
        badge(item.report.decision)
      );
      row.append(head, node("p", "", item.report.summary));
      for (const check of item.report.checks) {
        const checkRow = node("div", "review");
        checkRow.append(badge(check.status), node("p", "", check.name), node("p", "subtle", check.evidence));
        row.append(checkRow);
      }
      box.append(row);
    }
    return card("Reviews & verification", box);
  }
  function activity(data) {
    const box = node("div"), records = data.team?.observations ?? [];
    if (!records.length) box.append(empty("Observed tool activity will appear here."));
    for (const item of [...records].reverse()) {
      const row = node("div", "activity");
      row.append(
        node("h3", "", teamLabel(item.role) + " \xB7 " + human(item.kind)),
        node("span", "subtle", "Revision " + item.revision + " \xB7 " + human(item.phase)),
        node("p", "", item.detail)
      );
      box.append(row);
    }
    return card("Observed activity", box, "From Codex events, not estimated progress");
  }
  function messages(data) {
    const box = node("div");
    if (!data.team?.messages.length) box.append(empty("Task updates and agent messages will appear here."));
    for (const message of data.team?.messages ?? []) {
      const row = node("div", "activity");
      row.append(
        node("h3", "", teamLabel(message.from) + " \u2192 " + teamLabel(message.to)),
        badge(message.status),
        node("p", "", message.text)
      );
      box.append(row);
    }
    return card("Communication", box);
  }
  function operations(data) {
    const box = node("div", "table-wrap");
    if (!data.jobs.length) box.append(empty("No APEX operation jobs recorded for this project."));
    else {
      const table = node("table"), head = node("tr");
      ["Operation", "Status", "Result", ""].forEach((s) => head.append(node("th", "", s)));
      const thead = node("thead");
      thead.append(head);
      table.append(thead);
      const body = node("tbody");
      for (const job of data.jobs) {
        const row = node("tr"), state = node("td"), summary = node("td"), action = node("td");
        state.append(badge(job.status));
        summary.append(node("p", "", job.summary || "Awaiting a result"));
        if (job.diagnostics.length || job.artifacts.length)
          summary.append(
            codeDetails("Diagnostics & artifacts", { diagnostics: job.diagnostics, artifacts: job.artifacts })
          );
        if (active(job.status)) {
          const stop = node("button", "danger", "Stop");
          stop.disabled = !connected || busy || !data.trusted;
          stop.onclick = () => {
            void act({ kind: "cancel-job", id: job.id });
          };
          action.append(stop);
        }
        row.append(node("td", "", job.operation), state, summary, action);
        body.append(row);
      }
      table.append(body);
      box.append(table);
    }
    const output = [card("Operation jobs", box, "Compile, export, tests and deployment work")];
    const deployments = node("div");
    if (!data.deployments.length) deployments.append(empty("No deployment runs recorded."));
    for (const deployment of data.deployments) {
      const row = node("div", "review");
      row.append(
        badge(deployment.status),
        node("p", "subtle", new Date(deployment.at).toLocaleString()),
        node("pre", "", deployment.details)
      );
      deployments.append(row);
    }
    output.push(
      card(
        "Deployment & import journal",
        deployments,
        "Actual durable runtime state; an unknown outcome remains unknown"
      )
    );
    return output;
  }
  function render(data) {
    const connectionsChanged = JSON.stringify(snapshot?.connections) !== JSON.stringify(data.connections);
    snapshot = data;
    connected = true;
    $("project-name").textContent = data.configuration?.application.alias ?? "Unconfigured workspace";
    $("project-path").textContent = data.project;
    $("version").textContent = data.version;
    $("connection").className = "badge good";
    $("connection").textContent = "Live";
    $("updated").textContent = "Updated " + new Date(data.updatedAt).toLocaleTimeString();
    $("connection-error").hidden = true;
    document.body.dataset.disconnected = "false";
    const nextPreferences = JSON.stringify(data.preferences);
    const nextSqlcl = JSON.stringify(data.sqlcl);
    if (!sqlclDirty && nextSqlcl !== sqlclSignature) {
      input("sqlcl-mode").value = data.sqlcl.mode;
      input("sqlcl-level").value = data.sqlcl.mcpRestrictLevel;
      input("sqlcl-transport").value = data.sqlcl.databaseTransport ?? "direct";
      sqlclControls();
      sqlclSignature = nextSqlcl;
    }
    if (!preferencesDirty && nextPreferences !== preferencesSignature) {
      for (const prefix of ["default", "task"]) {
        input(prefix + "-execution-mode").value = data.preferences.executionMode;
        input(prefix + "-browser-mode").value = data.preferences.browserMode;
        input(prefix + "-developers").value = String(data.preferences.developers);
        modeControls(prefix);
        input(prefix + "-sandbox").value = data.preferences.sandbox;
        input(prefix + "-timeout").value = String(data.preferences.timeoutSeconds);
      }
      preferencesSignature = nextPreferences;
    }
    if (!initialized) {
      initialized = true;
      if (embedded) {
        input("connection-ords-password").disabled = true;
        $("connection-password-note").textContent = "Set the password in the local dashboard opened by apexrest panel open, or use CLI --password-file. Passwords are never sent through the embedded Codex panel.";
      }
      const environment = $("environment");
      for (const [name, env] of Object.entries(data.configuration?.environments ?? {})) {
        const option = node("option", "", name + " \xB7 " + env.kind);
        option.value = name;
        environment.append(option);
      }
      if (!data.configured)
        notice(
          "This folder has no apexrest.json. Initialize or open an APEXREST application project to run development tasks."
        );
      else if (!data.trusted)
        notice(
          "This project is not trusted in APEXREST. The panel can display its state; actions require the existing project trust setup."
        );
    }
    draw(
      "connection-refs",
      [data.connections, data.configuration?.environments],
      () => Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys(data.connections),
          ...Object.values(data.configuration?.environments ?? {}).flatMap((env) => [
            env.readConnectionRef,
            env.deployConnectionRef
          ])
        ])
      ).map((name) => {
        const option = node("option");
        option.value = name;
        return option;
      })
    );
    const teamSelect = $("team-select");
    if (document.activeElement !== teamSelect) {
      const options = data.teams.map((team) => {
        const option = node(
          "option",
          "",
          human(team.status) + " \xB7 revision " + team.revision + " \xB7 " + new Date(team.updatedAt).toLocaleTimeString()
        );
        option.value = team.id;
        return option;
      });
      teamSelect.replaceChildren(...options);
      teamSelect.value = data.team?.id ?? "";
      teamSelect.disabled = !options.length;
    }
    draw(
      "metrics",
      [
        data.teams,
        data.sqlcl,
        data.jobs,
        data.team?.status,
        data.team?.executionMode,
        data.preferences.executionMode
      ],
      () => [
        [
          "Active runs",
          String(data.teams.filter((team) => active(team.status)).length),
          data.team ? human(data.team.phase) : "Ready for a new task"
        ],
        [
          (data.team?.executionMode ?? data.preferences.executionMode) === "single" ? "Verification" : "Review gate",
          data.team ? human(data.team.status) : "No result",
          (data.team?.executionMode ?? data.preferences.executionMode) === "single" ? "Single-agent checks" : "Manager + independent QA"
        ],
        [
          "APEX operations",
          String(data.jobs.filter((job) => active(job.status)).length),
          "Running or queued"
        ],
        [
          "Database connectivity",
          data.sqlcl.databaseTransport === "ords" ? "ORDS HTTP(S)" : "Direct Oracle",
          data.sqlcl.mode === "mcp" ? "SQLcl MCP \xB7 restriction " + data.sqlcl.mcpRestrictLevel : "SQLcl CLI"
        ]
      ].map(([label, value, sub]) => {
        const box = node("div", "metric");
        box.append(node("div", "subtle", label), node("div", "value", value), node("div", "subtle", sub));
        return box;
      })
    );
    const stableTeam = data.team ? { ...data.team, updatedAt: "" } : null;
    draw("overview-live", [stableTeam, data.changes, data.configuration, data.trusted], () => {
      const columns = node("div", "two-columns"), changeBox = node("div");
      changeBox.append(
        data.changes.files.length ? node("pre", "", data.changes.files.join("\n")) : empty(
          data.changes.status === "available" ? "No uncommitted Git changes." : "Git status is unavailable for this folder."
        )
      );
      columns.append(
        card(
          "Project context",
          kv([
            ["Application", data.configuration?.application.alias],
            ["Source", data.configuration?.application.sourceDir],
            [
              "Environments",
              Object.keys(data.configuration?.environments ?? {}).join(", ") || "None configured"
            ],
            ["Required suites", data.configuration?.tests.requiredSuites.join(", ") || "None declared"],
            ["Trust", data.trusted ? "Trusted project" : "Not granted"]
          ])
        ),
        card("Working changes", changeBox)
      );
      return [pipeline(data), columns, activity(data)];
    });
    draw("team-live", stableTeam, () => {
      const columns = node("div", "two-columns");
      columns.append(reviews(data), messages(data));
      return [pipeline(data), columns, activity(data)];
    });
    draw("operations-live", [data.jobs, data.deployments, busy], () => operations(data));
    draw(
      "settings-live",
      [
        data.preferences,
        data.configuration,
        data.connections,
        data.toolchain,
        data.permissions,
        stableTeam?.members.map((m) => m.configuration)
      ],
      () => {
        const box = node("div");
        box.append(
          card(
            "Project & target settings",
            kv([
              ["Project", data.project],
              ["Source directory", data.configuration?.application.sourceDir],
              ["Artifacts", data.configuration?.artifacts.directory],
              [
                "Artifact retention",
                data.configuration ? data.configuration.artifacts.retentionDays + " days" : null
              ],
              ["Required suites", data.configuration?.tests.requiredSuites.join(", ") || "None declared"],
              ["Automated browser", data.configuration?.tests.defaultBrowser],
              [
                "Verification browser",
                data.preferences.browserMode === "external" ? "External system browser" : "Codex in-app browser"
              ],
              ["Execution mode", data.preferences.executionMode === "single" ? "Single agent" : "Agent team"],
              ["Active deploy/test grants", data.permissions.activeGrants.length]
            ])
          )
        );
        for (const [name, env] of Object.entries(data.configuration?.environments ?? {}))
          box.append(
            card(
              name + " \xB7 " + human(env.kind),
              kv([
                ["Application ID", env.applicationId],
                ["Workspace", env.workspace],
                ["Parsing schema", env.parsingSchema],
                ["Database", env.databaseIdentity.dbUniqueName],
                ["Service", env.databaseIdentity.serviceName],
                ["Read connection", env.readConnectionRef],
                ["Deploy connection", env.deployConnectionRef],
                ["Control mode", env.deploymentControl ?? "local"],
                ["Application URL", env.baseUrl]
              ])
            )
          );
        box.append(
          card(
            "Configuration details",
            codeDetails("Project, toolchain and connection references", {
              configuration: data.configuration,
              toolchain: data.toolchain,
              connectionReferences: data.connections,
              authorization: data.permissions
            })
          )
        );
        return [box];
      }
    );
    if (connectionsChanged) renderSavedConnections();
    controls();
    if (currentView === "settings" && input("sqlcl-transport").value === "direct" && savedConnectionsState === "idle")
      void loadSavedConnections();
  }
  var refreshing = false;
  async function refresh() {
    if (refreshing) return;
    refreshing = true;
    try {
      render(await api());
    } catch (error) {
      connected = false;
      $("connection").textContent = "Disconnected";
      $("connection").className = "badge bad";
      $("connection-error").hidden = false;
      $("connection-error").textContent = (error instanceof Error ? error.message : String(error)) + (snapshot ? " Showing the last received state." : "");
      document.body.dataset.disconnected = "true";
      controls();
    } finally {
      refreshing = false;
    }
  }
  var views = {
    overview: ["Workspace overview", "Your team, settings and APEX work in one place."],
    team: ["Agents", "Follow implementation, communication and verification."],
    operations: ["APEX operations", "Compile, verify and follow deployment state."],
    settings: ["Workspace settings", "Inspect effective configuration and choose defaults for future work."]
  };
  function view(name) {
    currentView = name;
    document.querySelectorAll("[data-page]").forEach((page) => {
      page.hidden = page.dataset.page !== name;
    });
    document.querySelectorAll("[data-view]").forEach((button) => {
      if (button.dataset.view === name) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    const titles = views[name];
    $("view-title").textContent = titles[0];
    $("view-subtitle").textContent = titles[1];
    if (name === "settings" && input("sqlcl-transport").value === "direct") void loadSavedConnections();
  }
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.onclick = () => view(button.dataset.view);
  });
  $("refresh").onclick = () => {
    void refresh();
  };
  $("new-task").onclick = () => {
    if (snapshot) {
      input("task-execution-mode").value = snapshot.preferences.executionMode;
      input("task-browser-mode").value = snapshot.preferences.browserMode;
      input("task-developers").value = String(snapshot.preferences.developers);
      modeControls("task");
      input("task-sandbox").value = snapshot.preferences.sandbox;
      input("task-timeout").value = String(snapshot.preferences.timeoutSeconds);
    }
    $("task-dialog").showModal();
    input("task").focus();
  };
  $("close-task").onclick = () => $("task-dialog").close();
  $("team-select").onchange = () => {
    chosenTeam = input("team-select").value || void 0;
    void refresh();
  };
  $("task-form").onsubmit = (event) => {
    event.preventDefault();
    void act({
      kind: "start",
      request: {
        task: input("task").value,
        executionMode: input("task-execution-mode").value,
        browserMode: input("task-browser-mode").value,
        developers: Number(input("task-developers").value),
        sandbox: input("task-sandbox").value,
        timeoutSeconds: Number(input("task-timeout").value)
      }
    });
  };
  function modeControls(prefix) {
    if (prefix === "task") {
      const teamOption = $("task-execution-mode").querySelector("option[value=team]");
      teamOption.disabled = !snapshot?.preferences.multiAgentEnabled;
      if (teamOption.disabled) input("task-execution-mode").value = "single";
    }
    const single = input(prefix + "-execution-mode").value === "single";
    input(prefix + "-developers").disabled = single;
    if (prefix === "task")
      input("task-developers").value = single ? "1" : String(snapshot?.preferences.developers ?? 1);
    $(prefix + "-workflow-note").textContent = single ? "Single agent uses your current Codex chat. No new agent starts. Continue tasks and view results in that conversation." : "Plan \u2192 developers \u2192 manager review \u2192 independent QA \u2192 final manager review. Reviewers remain read only.";
  }
  for (const prefix of ["default", "task"])
    input(prefix + "-execution-mode").onchange = () => modeControls(prefix);
  $("preferences-form").oninput = () => {
    preferencesDirty = true;
  };
  $("preferences-form").onsubmit = (event) => {
    event.preventDefault();
    void act({
      kind: "preferences",
      settings: {
        executionMode: input("default-execution-mode").value,
        multiAgentEnabled: input("default-execution-mode").value === "team",
        browserMode: input("default-browser-mode").value,
        developers: Number(input("default-developers").value),
        sandbox: input("default-sandbox").value,
        timeoutSeconds: Number(input("default-timeout").value)
      }
    });
  };
  $("sqlcl-form").onsubmit = (event) => {
    event.preventDefault();
    void act({
      kind: "sqlcl",
      settings: {
        schemaVersion: 1,
        mode: input("sqlcl-mode").value,
        mcpRestrictLevel: input("sqlcl-level").value,
        databaseTransport: input("sqlcl-transport").value
      }
    });
  };
  function sqlclControls() {
    const ords = input("sqlcl-transport").value === "ords";
    if (ords) input("sqlcl-mode").value = "cli";
    $("sqlcl-mode").querySelector("option[value=mcp]").disabled = ords;
    input("sqlcl-level").disabled = input("sqlcl-mode").value !== "mcp";
    $("sqlcl-transport-note").textContent = ords ? "Connect through ORDS over HTTP(S) when the Oracle listener is unavailable. Uses SQLcl CLI and the ORDS settings for each connection reference below." : "Connect through the Oracle listener using saved SQLcl connections.";
    for (const [id, enabled] of [
      ["connection-direct-group", !ords],
      ["connection-ords-group", ords]
    ]) {
      const group = $(id);
      group.hidden = !enabled;
      group.disabled = !enabled;
    }
    input("connection-ords-password").disabled = embedded;
    $("connection-mode-note").textContent = ords ? "Editing ORDS HTTP(S) settings for the selected connection reference." : "Editing the direct Oracle connection for the selected connection reference.";
    $("connection-save").textContent = ords ? "Save ORDS connection" : "Save direct connection";
    controls();
  }
  $("sqlcl-form").oninput = (event) => {
    sqlclDirty = true;
    sqlclControls();
    if (event.target.id === "sqlcl-transport" && input("sqlcl-transport").value === "direct" && currentView === "settings")
      void loadSavedConnections();
  };
  $("saved-connections-refresh").onclick = () => {
    void loadSavedConnections(true);
  };
  input("connection-direct").onchange = () => renderSavedConnections();
  input("connection-ref").onchange = () => {
    const connection = snapshot?.connections[input("connection-ref").value.trim()];
    renderSavedConnections(connection?.name ?? "");
    input("connection-ords-url").value = connection?.ords?.url ?? "";
    input("connection-ords-user").value = connection?.ords?.username ?? "";
    input("connection-ords-password").value = "";
  };
  $("connection-form").onsubmit = (event) => {
    event.preventDefault();
    const ords = input("sqlcl-transport").value === "ords", sqlclName = input("connection-direct").value, ordsUrl = input("connection-ords-url").value.trim(), ordsUsername = input("connection-ords-user").value.trim(), password = input("connection-ords-password").value;
    if (ords && embedded && password) {
      notice("Enter the password in the local dashboard or use CLI --password-file.", true);
      return;
    }
    if (!ords && !sqlclName) {
      notice("Choose a saved SQLcl connection for this reference.", true);
      return;
    }
    if (ords && (!ordsUrl || !ordsUsername)) {
      notice("Enter the ORDS schema URL and your database username.", true);
      return;
    }
    void act({
      kind: "connection",
      name: input("connection-ref").value.trim(),
      ...!ords ? { sqlclName } : { ordsUrl, ordsUsername, ...password ? { password } : {} }
    });
  };
  $("message-form").onsubmit = (event) => {
    event.preventDefault();
    if (snapshot?.team) void act({ kind: "message", id: snapshot.team.id, message: input("message").value });
  };
  $("cancel-team").onclick = () => {
    if (snapshot?.team) void act({ kind: "cancel-team", id: snapshot.team.id });
  };
  $("validate").onclick = () => {
    void act({ kind: "validate" });
  };
  $("plan").onclick = () => {
    const env = input("environment").value;
    if (!env) {
      notice("Choose an explicit environment before planning a deployment.", true);
      return;
    }
    void act({ kind: "plan", env });
  };
  $("run-tests").onclick = () => {
    const suite = input("suite").value, env = input("environment").value;
    if (suite !== "unit" && !env) {
      notice("Choose an explicit environment for this test suite.", true);
      return;
    }
    void act({ kind: "test", suite, ...env ? { env } : {} });
  };
  controls();
  if (launch.get("view") === "team") view("team");
  var mark = document.querySelector(".brand-mark");
  if (mark) {
    const icon = node("img");
    icon.src = apexrest_logo_default;
    icon.alt = "";
    icon.width = 38;
    icon.height = 38;
    mark.replaceChildren(icon);
  }
  if (embedded) {
    void bridge("ui/initialize", {
      protocolVersion: "2026-01-26",
      appInfo: { name: "apexrest-panel", version: "1.0.0" },
      appCapabilities: {}
    }).then(() => {
      bridgeReady = true;
      window.parent.postMessage({ jsonrpc: "2.0", method: "ui/notifications/initialized", params: {} }, "*");
      void refresh();
    }).catch((error) => notice(String(error), true));
  } else void refresh();
  setInterval(() => {
    if (!document.hidden) void refresh();
  }, 2e3);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) void refresh();
  });
})();
