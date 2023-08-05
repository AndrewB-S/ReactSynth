This keyboard is built using react + typescript + tone.js using vite as the build tool. I may rebuild this with next.js when I implement CRUD functionality with planned feature updates. 

The novel element is the keyboard generation. My intention is for this to be a keyboard made for mobile users to customize to fit their preference on their screen. They can choose the number of notes to display, they can choose the starting note, they can choose the octave we start on, and later I will be implementing full synth controls. 

Currently, I can't find any other keyboard online that generates keys this way, but while I think the challenge to reproduce a piano keyboard with code is difficult, I don't think it's extremely difficult if you're able to follow design documents from a real piano manufacturer, which is what I was able to do thanks to the page at http://www.quadibloc.com/other/cnv05.htm. I did the math and converted his measurements into ratios and key-fractions, and was able to handle the edge cases of starting on notes like A, where missing the partial size of the Ab makes the pattern of the black keys off. As a result, I believe I'm making the most playable mobile piano keyboard around right now, which is funny to type, because at the moment I still have to change the direction of the keyboard on mobile devices to landscape.

I will be working further to clean up performance in generation, since currently adding notes causes a rerender of the entire keyboard component (hopefully usememo will fix this), and I will be continuing to add features as development continues. 

Planned features: 
Parameters to adjust the synthesizer.
Presets of those parameters, including saving and sharing presets.
Uploading and sampling audio
Potentially a port to react native. 
