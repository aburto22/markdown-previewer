const DATA = `
A markdown previewer
========================

Hi guys, please enjoy my markdown previewer. Feel free to play around with the different options.

How you can use me
-------------------

1. Type in stuff on the left screen.
2. See the live updates on the right!

That's it. __That simple__!

For headings, you can do like:

\`\`\`
# This is H1
## This is H2
### This is H3 with some extra pounds ###
#### You get the idea ####
##### I don't need extra pounds at the end
###### H6 is the max
\`\`\`

You can also add inline code by including brackets like \` <div></div> \` that can be useful.

Want to know more about me?
---------------------------

You can visit [my github profile by clicking here!]

Happy coding!

> Coding is life - 
> Albert Einstein

![cat coding]

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
[my github profile by clicking here!]: https://github.com/aburto22
[cat coding]: https://image.shutterstock.com/image-vector/cute-cat-sitting-on-laptop-260nw-1710677617.jpg`;

function App() {
  const [text, setText] = React.useState(DATA);
  const [editorFullscreen, setEditorFullscreen] = React.useState(false);
  const [previewFullscreen, setPreviewFullscreen] = React.useState(false);

  function handleChange(e) {
    let newText = e.target.value;
    console.log(typeof newText);
    console.log(newText);
    setText(newText);
  }

  function createMarkup() {
    return {
      __html: marked(text, { breaks: true }),
    };
  }

  function handleEditorFullscreen() {
    setEditorFullscreen((editorFullscreen) => !editorFullscreen);
  }

  function handlePreviewFullscreen() {
    setPreviewFullscreen((previewFullscreen) => !previewFullscreen);
  }

  return (
    <div>
      <div
        className={`editor-container ${editorFullscreen ? "fullscreen" : ""} ${
          previewFullscreen ? "notShowing" : ""
        }`}
      >
        <i
          className="bi bi-arrows-fullscreen fullscreenArrows"
          onClick={handleEditorFullscreen}
        />
        <textarea className="editor" onChange={handleChange} value={text} />
      </div>
      <div
        className={`preview-container ${
          previewFullscreen ? "fullscreen" : ""
        } ${editorFullscreen ? "notShowing" : ""}`}
      >
        <i
          className="bi bi-arrows-fullscreen fullscreenArrows"
          onClick={handlePreviewFullscreen}
        />
        <div className="preview" dangerouslySetInnerHTML={createMarkup()} />
      </div>
      <p id="footer">
        Created by Alejandro Aburto for a freeCodeCamp challange
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
