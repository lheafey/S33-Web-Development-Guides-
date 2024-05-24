import React, { useState } from 'react';
import 'htmlstuff.css';

function HTML() {
    const [openIt, openSeaseme] = useState(false);
    
    const openUp = () => {
        openSeaseme(!openIt);
      };

    return (
        <div>
            Here's the basics on HTML
            {showMore && (
            <div>
            <header>
                <h1>Welcome to HTML Basics</h1>
            </header>

            <main>
                <section>
                    <h2>1. Headings</h2>
                    <p>HTML provides six levels of headings, from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</p>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                </section>
                <section>
                    <h2>2. Paragraphs</h2>
                    <p>Paragraphs are defined with the <code>&lt;p&gt;</code> tag.</p>
                    <p>This is a paragraph.</p>
                </section>
                <section>
                    <h2>3. Links</h2>
                    <p>Links are created using the <code>&lt;a&gt;</code> tag.</p>
                </section>
                <section>
                    <h2>4. Images</h2>
                    <p>Images are embedded using the <code>&lt;img&gt;</code> tag.</p>
                    <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
                </section>
                <section>
                    <h2>5. Lists</h2>
                    <p>HTML supports ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>) lists.</p>

                    <h3>Ordered List:</h3>
                    <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ol>

                    <h3>Unordered List:</h3>
                    <ul>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ul>
                </section>
                <section>
                    <h2>6. Tables</h2>
                    <p>Tables are created using the <code>&lt;table&gt;</code> tag, with rows (<code>&lt;tr&gt;</code>) and cells (<code>&lt;td&gt;</code>).</p>
                    <table>
                        <tr>
                            <th>Header 1</th>
                            <th>Header 2</th>
                        </tr>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                        </tr>
                        <tr>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                        </tr>
                    </table>
                </section>
                <section>
                    <h2>7. Forms</h2>
                    <p>Forms are used to collect input.</p>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </section>
            </main>
        </div>
        )}
        <button className="toggleButton" onClick={toggleShowMore}>
        {showMore ? 'Hide Example' : 'Show Example'}
      </button>
    </div>
    );
};

export default HTML;
