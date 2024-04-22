import React from 'react';
import { marked } from "marked";

test('markdown parser', () => {
    const input = "This is _Markdown_.";
    const expectedOutput = "<p>This is <em>Markdown</em>.</p>\n";

    const output = marked.parse(input);
    expect(output).toEqual(expectedOutput);
});
