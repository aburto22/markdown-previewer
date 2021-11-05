"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DATA = "\nA markdown previewer\n========================\n\nHi guys, please enjoy my markdown previewer. Feel free to play around with the different options.\n\nHow you can use me\n-------------------\n\n1. Type in stuff on the left screen.\n2. See the live updates on the right!\n\nThat's it. __That simple__!\n\nFor headings, you can do like:\n\n```\n# This is H1\n## This is H2\n### This is H3 with some extra pounds ###\n#### You get the idea ####\n##### I don't need extra pounds at the end\n###### H6 is the max\n```\n\nYou can also add inline code by including brackets like ` <div></div> ` that can be useful.\n\nWant to know more about me?\n---------------------------\n\nYou can visit [my github profile by clicking here!]\n\nHappy coding!\n\n> Coding is life - \n> Albert Einstein\n\n![cat coding]\n\n[Marked]: https://github.com/markedjs/marked/\n[Markdown]: http://daringfireball.net/projects/markdown/\n[my github profile by clicking here!]: https://github.com/aburto22\n[cat coding]: https://image.shutterstock.com/image-vector/cute-cat-sitting-on-laptop-260nw-1710677617.jpg";

function App() {
  var _React$useState = React.useState(DATA),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editorFullscreen = _React$useState4[0],
      setEditorFullscreen = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      previewFullscreen = _React$useState6[0],
      setPreviewFullscreen = _React$useState6[1];

  function handleChange(e) {
    setText(e.target.value);
  }

  function createMarkup() {
    return {
      __html: marked.parse(text, {
        breaks: true
      })
    };
  }

  function handleEditorFullscreen() {
    setEditorFullscreen(function (editorFullscreen) {
      return !editorFullscreen;
    });
  }

  function handlePreviewFullscreen() {
    setPreviewFullscreen(function (previewFullscreen) {
      return !previewFullscreen;
    });
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "editor-container ".concat(editorFullscreen ? "fullscreen" : "", " ").concat(previewFullscreen ? "notShowing" : "")
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrows-fullscreen fullscreenArrows",
    onClick: handleEditorFullscreen
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "editor",
    onChange: handleChange,
    value: text
  })), /*#__PURE__*/React.createElement("div", {
    className: "preview-container ".concat(previewFullscreen ? "fullscreen" : "", " ").concat(editorFullscreen ? "notShowing" : "")
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-arrows-fullscreen fullscreenArrows",
    onClick: handlePreviewFullscreen
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview",
    dangerouslySetInnerHTML: createMarkup()
  })), /*#__PURE__*/React.createElement("p", {
    id: "footer"
  }, "Created by Alejandro Aburto for a freeCodeCamp challange"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));
