import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css"; 

export default function Editor({ currentNote, updateNote, darkMode }) {
    const [selectedTab, setSelectedTab] = React.useState("write");

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    return (
        <section className={`pane editor ${darkMode ? 'dark-mode' : ''}`}>
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={200} // Adjusting the editor height for better visibility
                heightUnits="px"
            />
        </section>
    );
}
