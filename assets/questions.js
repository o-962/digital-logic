window.LEVELS={"1": "Number Systems", "2": "Conversions", "3": "Arithmetic", "4": "Complements & Signed", "5": "Codes & Logic", "6": "GOAT Level"};
window.QBANK=[
{
"t": "in",
"lv": 1,
"src": "Slides p.4",
"q": "Convert (123.2)<sub>5</sub> to decimal.",
"acc": [
"38.4"
],
"num": true,
"lz": false,
"hint": "",
"sol": "Use <b>value = Σ digit × 5<sup>position</sup></b>:<div class='steps'>position:   2   1   0  .  −1\ndigit:      1   2   3  .   2\n= 1·5² + 2·5¹ + 3·5⁰ + 2·5⁻¹\n= 25 + 10 + 3 + 0.4 = 38.4</div>",
"id": 1
},
{
"t": "in",
"lv": 1,
"src": "Slides Ex 1",
"q": "Convert (213)<sub>4</sub> to decimal.",
"acc": [
"39"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>2·4² + 1·4¹ + 3·4⁰ = 32 + 4 + 3 = 39</div>",
"id": 2
},
{
"t": "in",
"lv": 1,
"src": "Slides Ex 1",
"q": "Convert (55.3)<sub>6</sub> to decimal.",
"acc": [
"35.5"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>5·6 + 5·1 + 3·6⁻¹ = 30 + 5 + 3/6 = 35.5</div>",
"id": 3
},
{
"t": "mcq",
"lv": 1,
"src": "Slides Ex 2",
"q": "(11.101)<sub>2</sub> = ( ? )<sub>10</sub>",
"opts": [
"3.625",
"3.5",
"5.625",
"3.101",
"3.58"
],
"a": 0,
"sol": "<div class='steps'>1·2 + 1·1 + 1·½ + 0·¼ + 1·⅛\n= 2 + 1 + 0.5 + 0.125 = 3.625</div><p>Fraction weights in binary are ½, ¼, ⅛, 1/16, …</p>",
"id": 4
},
{
"t": "mcq",
"lv": 1,
"src": "Slides Ex 3",
"q": "(2D.8)<sub>16</sub> = ( ? )<sub>10</sub>",
"opts": [
"45.5",
"45.8",
"29.5",
"45.05",
"210.5"
],
"a": 0,
"sol": "<div class='steps'>2·16 + D·1 + 8·16⁻¹\n= 32 + 13 + 8/16 = 45.5</div><div class='trap'>.8 in hex is 8/16 = 0.5, not 0.8.</div>",
"id": 5
},
{
"t": "mcq",
"lv": 1,
"src": "Slides Ex 5",
"q": "If (BEE)<sub>r</sub> = (2699)<sub>10</sub>, what is r?",
"opts": [
"15",
"13",
"14",
"16",
"12"
],
"a": 0,
"sol": "<div class='steps'>B = 11, E = 14\n11r² + 14r + 14 = 2699\n11r² + 14r − 2685 = 0\nr = [−14 + √(196 + 4·11·2685)] / 22 = (−14 + 344)/22 = 15</div><p>Check the digits: E = 14 &lt; 15 ✓. Quick exam trick: test the options. 11·225 + 14·15 + 14 = 2475 + 210 + 14 = 2699 ✓</p>",
"id": 6
},
{
"t": "in",
"lv": 1,
"src": "Slides Ex 5",
"q": "Convert (12HK)<sub>21</sub> to decimal.",
"acc": [
"10520"
],
"num": true,
"lz": false,
"hint": "",
"sol": "Letters continue after F: G=16, H=17, I=18, J=19, K=20.<div class='steps'>1·21³ + 2·21² + 17·21 + 20\n= 9261 + 882 + 357 + 20 = 10520</div>",
"id": 7
},
{
"t": "in",
"lv": 1,
"src": "Book 1.3(b)",
"q": "Convert (198)<sub>12</sub> to decimal.",
"acc": [
"260"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>1·144 + 9·12 + 8 = 144 + 108 + 8 = 260</div>",
"id": 8
},
{
"t": "mcq",
"lv": 1,
"src": "Book 1.3(a)",
"q": "(4310)<sub>5</sub> = ( ? )<sub>10</sub>",
"opts": [
"580",
"4310",
"575",
"585",
"530"
],
"a": 0,
"sol": "<div class='steps'>Horner: ((4·5 + 3)·5 + 1)·5 + 0\n4·5+3 = 23 → 23·5+1 = 116 → 116·5+0 = 580</div>",
"id": 9
},
{
"t": "mcq",
"lv": 1,
"src": "Book 1.4",
"q": "The largest binary number that can be expressed with 16 bits equals:",
"opts": [
"65,535 = (FFFF)<sub>16</sub>",
"65,536 = (10000)<sub>16</sub>",
"32,767 = (7FFF)<sub>16</sub>",
"65,535 = (EFFF)<sub>16</sub>",
"16,383 = (3FFF)<sub>16</sub>"
],
"a": 0,
"sol": "With n bits the largest value is 2ⁿ − 1 (all ones).<div class='steps'>2¹⁶ − 1 = 65,536 − 1 = 65,535\n1111 1111 1111 1111 → each nibble 1111 = F → FFFF</div><div class='trap'>65,536 is the <b>number of patterns</b>. The largest <b>value</b> is one less, because counting starts at 0. 7FFF is the largest <b>signed</b> 16-bit value.</div>",
"id": 10
},
{
"t": "mcq",
"lv": 1,
"src": "Book 1.5(a)",
"q": "For 14/2 = 5 to be correct, the numbers are in base:",
"opts": [
"6",
"5",
"7",
"8",
"10"
],
"a": 0,
"sol": "<div class='steps'>(14)r = r + 4\n(r + 4)/2 = 5  →  r + 4 = 10  →  r = 6</div><p>Check: digit 5 &lt; 6 ✓ and (14)<sub>6</sub> = 10, 10/2 = 5 ✓</p>",
"id": 11
},
{
"t": "in",
"lv": 1,
"src": "Book 1.5(c)",
"q": "Find the base r for which 24 + 17 = 40 is correct.",
"acc": [
"11"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>(2r + 4) + (r + 7) = 4r\n3r + 11 = 4r  →  r = 11</div><p>Check: digit 7 &lt; 11 ✓ and 26 + 18 = 44 = 4·11 ✓</p>",
"id": 12
},
{
"t": "mcq",
"lv": 1,
"src": "Book 1.6",
"q": "The solutions to x² − 11x + 22 = 0 are x = 3 and x = 6. What is the base?",
"opts": [
"8",
"6",
"7",
"9",
"11"
],
"a": 0,
"sol": "For roots 3 and 6: (x − 3)(x − 6) = x² − 9x + 18. Match the coefficients:<div class='steps'>(11)r = r + 1 = 9   → r = 8\n(22)r = 2r + 2 = 18 → r = 8  ✓ (both agree)</div>",
"id": 13
},
{
"t": "mcq",
"lv": 1,
"src": "Book 1.2(b)",
"q": "The exact number of bytes in 64M bytes is:",
"opts": [
"67,108,864",
"64,000,000",
"65,536,000",
"6,710,886",
"68,719,476,736"
],
"a": 0,
"sol": "<div class='steps'>M = 2²⁰ = 1,048,576\n64M = 2⁶ · 2²⁰ = 2²⁶ = 67,108,864</div><div class='trap'>In memory sizes M means 2²⁰, not 10⁶. 68,719,476,736 is 64<b>G</b>.</div>",
"id": 14
},
{
"t": "mcq",
"lv": 1,
"src": "First Exam 2017 Q2",
"q": "Given the numbers (1000100)<sub>2</sub>, (1000003)<sub>8</sub>, (1000002)<sub>10</sub>, (1000001)<sub>16</sub>:",
"opts": [
"(1000100)<sub>2</sub> is the smallest",
"They all have the same value",
"(1000002)<sub>10</sub> is the biggest",
"(1000100)<sub>2</sub>, (1000003)<sub>8</sub> and (1000001)<sub>16</sub> are equal and differ from (1000002)<sub>10</sub>",
"We can't compare them because at least one is invalid"
],
"a": 0,
"sol": "<div class='steps'>(1000100)2  = 64 + 4             = 68\n(1000003)8  = 8⁶ + 3 = 262144 + 3 = 262,147\n(1000002)10                     = 1,000,002\n(1000001)16 = 16⁶ + 1             = 16,777,217</div><p>All digits are valid in their bases. The binary one is smallest and the hex one is biggest. <b>Official answer: (b)</b>.</p>",
"id": 15
},
{
"t": "mcq",
"lv": 1,
"src": "First Exam 2017 Q7",
"q": "Which statement is correct?",
"opts": [
"(61)<sub>9</sub> &lt; (71)<sub>8</sub>",
"(61)<sub>9</sub> &gt; (71)<sub>8</sub>",
"(9876543210)<sub>12</sub> &gt; (9876543210)<sub>13</sub>",
"(9876543210)<sub>12</sub> = (9876543210)<sub>13</sub>",
"(123456)<sub>7</sub> &gt; (123456)<sub>8</sub>"
],
"a": 0,
"sol": "<div class='steps'>(61)9 = 6·9 + 1 = 55\n(71)8 = 7·8 + 1 = 57   → 55 &lt; 57 ✓</div><p>For the same digit string, a bigger base always gives a bigger value, so the base-13 and base-8 versions win and options c, d, e are false. <b>Official answer: (b)</b>.</p>",
"id": 16
},
{
"t": "mcq",
"lv": 1,
"src": "Concept",
"q": "Which number is <b>invalid</b>?",
"opts": [
"(778)<sub>8</sub>",
"(1201)<sub>3</sub>",
"(FACE)<sub>16</sub>",
"(GG)<sub>17</sub>",
"(1010)<sub>2</sub>"
],
"a": 0,
"sol": "Base r only allows digits 0 … r−1. Base 8 allows 0–7, so the digit 8 in (778)<sub>8</sub> is illegal. (GG)<sub>17</sub> is fine because G = 16 &lt; 17.",
"id": 17
},
{
"t": "mcq",
"lv": 1,
"src": "Concept",
"q": "What is the smallest possible base for the number (3A7.B)<sub>r</sub>?",
"opts": [
"12",
"11",
"10",
"16",
"8"
],
"a": 0,
"sol": "The largest digit is B = 11, and every digit must be ≤ r − 1. So r − 1 ≥ 11, which gives <b>r ≥ 12</b>.",
"id": 18
},
{
"t": "in",
"lv": 1,
"src": "Master",
"q": "Find r if (121)<sub>r</sub> = (144)<sub>10</sub>.",
"acc": [
"11"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>(121)r = r² + 2r + 1 = (r + 1)²\n(r + 1)² = 144  →  r + 1 = 12  →  r = 11</div>",
"id": 19
},
{
"t": "mcq",
"lv": 1,
"src": "Master",
"q": "For which base r is (35)<sub>r</sub> + (24)<sub>r</sub> = (103)<sub>r</sub> true?",
"opts": [
"6",
"7",
"8",
"5",
"9"
],
"a": 0,
"sol": "<div class='steps'>(3r+5) + (2r+4) = r² + 3\nr² − 5r − 6 = 0  →  (r − 6)(r + 1) = 0  →  r = 6</div><p>Check the digits: the largest digit is 5 &lt; 6 ✓</p>",
"id": 20
},
{
"t": "mcq",
"lv": 1,
"src": "Final 2018 Q24 (bridge)",
"q": "A memory has a size of 128K × 8. How many address lines and data lines does it have?",
"opts": [
"17 address lines, 8 data lines",
"16 address lines, 8 data lines",
"128 address lines, 8 data lines",
"7 address lines, 8 data lines",
"17 address lines, 3 data lines"
],
"a": 0,
"sol": "This is a powers-of-2 question from Chapter 1:<div class='steps'>128K = 2⁷ · 2¹⁰ = 2¹⁷ words → 17 address bits\nEach word is 8 bits → 8 data lines</div><p><b>Official answer: (d)</b>.</p>",
"id": 21
},
{
"t": "in",
"lv": 2,
"src": "Slides Ex 6",
"q": "Convert (156)<sub>10</sub> to binary.",
"acc": [
"10011100"
],
"num": false,
"lz": true,
"hint": "",
"sol": "<table><tr><th>Number ÷ 2</th><th>Quotient</th><th>Remainder</th><th>Coef.</th></tr><tr><td>156 ÷ 2</td><td>78</td><td>0</td><td>a<sub>0</sub></td></tr><tr><td>78 ÷ 2</td><td>39</td><td>0</td><td>a<sub>1</sub></td></tr><tr><td>39 ÷ 2</td><td>19</td><td>1</td><td>a<sub>2</sub></td></tr><tr><td>19 ÷ 2</td><td>9</td><td>1</td><td>a<sub>3</sub></td></tr><tr><td>9 ÷ 2</td><td>4</td><td>1</td><td>a<sub>4</sub></td></tr><tr><td>4 ÷ 2</td><td>2</td><td>0</td><td>a<sub>5</sub></td></tr><tr><td>2 ÷ 2</td><td>1</td><td>0</td><td>a<sub>6</sub></td></tr><tr><td>1 ÷ 2</td><td>0</td><td>1</td><td>a<sub>7</sub></td></tr></table><p>Read remainders <b>bottom → top</b> (last remainder = MSB): <b>(10011100)<sub>2</sub></b></p>",
"id": 22
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 7",
"q": "(77)<sub>10</sub> = ( ? )<sub>2</sub>",
"opts": [
"1001101",
"1011001",
"1001011",
"1100101",
"1001110"
],
"a": 0,
"sol": "<table><tr><th>Number ÷ 2</th><th>Quotient</th><th>Remainder</th><th>Coef.</th></tr><tr><td>77 ÷ 2</td><td>38</td><td>1</td><td>a<sub>0</sub></td></tr><tr><td>38 ÷ 2</td><td>19</td><td>0</td><td>a<sub>1</sub></td></tr><tr><td>19 ÷ 2</td><td>9</td><td>1</td><td>a<sub>2</sub></td></tr><tr><td>9 ÷ 2</td><td>4</td><td>1</td><td>a<sub>3</sub></td></tr><tr><td>4 ÷ 2</td><td>2</td><td>0</td><td>a<sub>4</sub></td></tr><tr><td>2 ÷ 2</td><td>1</td><td>0</td><td>a<sub>5</sub></td></tr><tr><td>1 ÷ 2</td><td>0</td><td>1</td><td>a<sub>6</sub></td></tr></table><p>Read remainders <b>bottom → top</b> (last remainder = MSB): <b>(1001101)<sub>2</sub></b></p><div class='trap'>1011001 is what you get by reading the remainders top → bottom, which is the most common mistake.</div>",
"id": 23
},
{
"t": "in",
"lv": 2,
"src": "Slides Ex 8",
"q": "Convert (55)<sub>10</sub> to base 3.",
"acc": [
"2001"
],
"num": false,
"lz": true,
"hint": "",
"sol": "<table><tr><th>Number ÷ 3</th><th>Quotient</th><th>Remainder</th><th>Coef.</th></tr><tr><td>55 ÷ 3</td><td>18</td><td>1</td><td>a<sub>0</sub></td></tr><tr><td>18 ÷ 3</td><td>6</td><td>0</td><td>a<sub>1</sub></td></tr><tr><td>6 ÷ 3</td><td>2</td><td>0</td><td>a<sub>2</sub></td></tr><tr><td>2 ÷ 3</td><td>0</td><td>2</td><td>a<sub>3</sub></td></tr></table><p>Read remainders <b>bottom → top</b> (last remainder = MSB): <b>(2001)<sub>3</sub></b></p><p>Check: 2·27 + 0 + 0 + 1 = 55 ✓</p>",
"id": 24
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 9",
"q": "(99)<sub>10</sub> = ( ? )<sub>16</sub>",
"opts": [
"63",
"36",
"5F",
"6C",
"99"
],
"a": 0,
"sol": "<table><tr><th>Number ÷ 16</th><th>Quotient</th><th>Remainder</th><th>Coef.</th></tr><tr><td>99 ÷ 16</td><td>6</td><td>3</td><td>a<sub>0</sub></td></tr><tr><td>6 ÷ 16</td><td>0</td><td>6</td><td>a<sub>1</sub></td></tr></table><p>Read remainders <b>bottom → top</b> (last remainder = MSB): <b>(63)<sub>16</sub></b></p>",
"id": 25
},
{
"t": "in",
"lv": 2,
"src": "Slides Ex 10",
"q": "Convert (0.64)<sub>10</sub> to base 5. (Type like 0.xx)",
"acc": [
"0.31"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<table><tr><th>Fraction × 5</th><th>Result</th><th>Integer → digit</th></tr><tr><td>0.64 × 5</td><td>3.2</td><td>3 (a<sub>-1</sub>)</td></tr><tr><td>0.2 × 5</td><td>1</td><td>1 (a<sub>-2</sub>)</td></tr></table><p>Read integer parts <b>top → bottom</b> (first = MSB after the point): <b>(0.31)<sub>5</sub></b></p><p>Check: 3/5 + 1/25 = 0.6 + 0.04 = 0.64 ✓</p>",
"id": 26
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 11",
"q": "(0.6875)<sub>10</sub> = ( ? )<sub>2</sub>",
"opts": [
"0.1011",
"0.1101",
"0.0111",
"0.1110",
"0.10111"
],
"a": 0,
"sol": "<table><tr><th>Fraction × 2</th><th>Result</th><th>Integer → digit</th></tr><tr><td>0.6875 × 2</td><td>1.375</td><td>1 (a<sub>-1</sub>)</td></tr><tr><td>0.375 × 2</td><td>0.75</td><td>0 (a<sub>-2</sub>)</td></tr><tr><td>0.75 × 2</td><td>1.5</td><td>1 (a<sub>-3</sub>)</td></tr><tr><td>0.5 × 2</td><td>1</td><td>1 (a<sub>-4</sub>)</td></tr></table><p>Read integer parts <b>top → bottom</b> (first = MSB after the point): <b>(0.1011)<sub>2</sub></b></p><p>Check: ½ + ⅛ + 1/16 = 0.5 + 0.125 + 0.0625 = 0.6875 ✓. 0.1101 is the reversed (wrong) reading.</p>",
"id": 27
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 11",
"q": "(0.6)<sub>10</sub> = ( ? )<sub>4</sub>",
"opts": [
"(0.212121…)<sub>4</sub>, repeating forever",
"(0.21)<sub>4</sub> exactly",
"(0.24)<sub>4</sub>",
"(0.6)<sub>4</sub>",
"(0.1212…)<sub>4</sub>"
],
"a": 0,
"sol": "<table><tr><th>Fraction × 4</th><th>Result</th><th>Integer → digit</th></tr><tr><td>0.6 × 4</td><td>2.4</td><td>2 (a<sub>-1</sub>)</td></tr><tr><td>0.4 × 4</td><td>1.6</td><td>1 (a<sub>-2</sub>)</td></tr><tr><td>0.6 × 4</td><td>2.4</td><td>2 (a<sub>-3</sub>)</td></tr><tr><td>0.4 × 4</td><td>1.6</td><td>1 (a<sub>-4</sub>)</td></tr><tr><td>0.6 × 4</td><td>2.4</td><td>2 (a<sub>-5</sub>)</td></tr><tr><td>0.4 × 4</td><td>1.6</td><td>1 (a<sub>-6</sub>)</td></tr></table><p>Read integer parts <b>top → bottom</b> (first = MSB after the point): <b>(0.212121…)<sub>4</sub></b></p><p>After two steps the fraction is 0.6 again, so the digits 2, 1 repeat forever. 0.6 = 3/5 and 5 isn't a power of 4, so the expansion can't end.</p>",
"id": 28
},
{
"t": "in",
"lv": 2,
"src": "Slides Ex 12",
"q": "Convert (15.625)<sub>10</sub> to octal.",
"acc": [
"17.5"
],
"num": false,
"lz": false,
"hint": "",
"sol": "Do the integer and fraction parts separately.<table><tr><th>Number ÷ 8</th><th>Quotient</th><th>Remainder</th><th>Coef.</th></tr><tr><td>15 ÷ 8</td><td>1</td><td>7</td><td>a<sub>0</sub></td></tr><tr><td>1 ÷ 8</td><td>0</td><td>1</td><td>a<sub>1</sub></td></tr></table><p>Read remainders <b>bottom → top</b> (last remainder = MSB): <b>(17)<sub>8</sub></b></p><table><tr><th>Fraction × 8</th><th>Result</th><th>Integer → digit</th></tr><tr><td>0.625 × 8</td><td>5</td><td>5 (a<sub>-1</sub>)</td></tr></table><p>Read integer parts <b>top → bottom</b> (first = MSB after the point): <b>(0.5)<sub>8</sub></b></p><p>Answer: <b>(17.5)<sub>8</sub></b>. Check: 8 + 7 + 5/8 = 15.625 ✓</p>",
"id": 29
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 13",
"q": "(7563.1102)<sub>8</sub> = ( ? )<sub>2</sub>",
"opts": [
"111 101 110 011 . 001 001 000 010",
"111 101 110 011 . 100 100 000 010",
"111 101 110 011 . 001 001 000 01",
"101 111 011 110 . 001 001 000 010",
"111 101 110 110 . 001 001 000 010"
],
"a": 0,
"sol": "Replace each octal digit with exactly 3 bits:<div class='steps'>7 → 111   5 → 101   6 → 110   3 → 011\n1 → 001   1 → 001   0 → 000   2 → 010</div><div class='trap'>Each digit must be <b>3</b> bits. Writing 1 as just '1' instead of '001' shifts every later bit.</div>",
"id": 30
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 13",
"q": "(011 011 110 101 100 . 010 11)<sub>2</sub> = ( ? )<sub>8</sub>",
"opts": [
"33654.26",
"33654.23",
"33654.213",
"15654.26",
"33654.13"
],
"a": 0,
"sol": "The fraction group '11' is incomplete. Pad it on the <b>right</b>: 11 → 110 = 6.<div class='steps'>011 011 110 101 100 . 010 110\n  3   3   6   5   4 .   2   6</div><div class='trap'>Padding on the left (011 = 3) gives 33654.23, which is wrong. The fraction would become .010011 instead of .01011.</div>",
"id": 31
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 14",
"q": "(10 1110 1001 0010 . 0110 1101 1)<sub>2</sub> = ( ? )<sub>16</sub>",
"opts": [
"2E92.6D8",
"2E92.6D1",
"BA48.DB",
"2E92.6DB",
"2E9.26D8"
],
"a": 0,
"sol": "<div class='steps'>Integer: pad left  → 0010 1110 1001 0010 → 2 E 9 2\nFraction: pad right → 0110 1101 1000      → 6 D 8</div>",
"id": 32
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 14",
"q": "(F13.67)<sub>16</sub> = ( ? )<sub>2</sub>",
"opts": [
"1111 0001 0011 . 0110 0111",
"1111 0001 0011 . 0111 0110",
"1111 1 11 . 11 111",
"1110 0001 0011 . 0110 0111",
"1111 0011 0001 . 0110 0111"
],
"a": 0,
"sol": "<div class='steps'>F → 1111   1 → 0001   3 → 0011  .  6 → 0110   7 → 0111</div>",
"id": 33
},
{
"t": "in",
"lv": 2,
"src": "Slides Ex 15",
"q": "Convert (6503.21)<sub>8</sub> to hexadecimal.",
"acc": [
"D43.44"
],
"num": false,
"lz": false,
"hint": "",
"sol": "Go through binary:<div class='steps'>6503.21 (8) → 110 101 000 011 . 010 001\nregroup by 4 from the point:\n  1101 0100 0011 . 0100 0100\n   D    4    3   .  4    4    → (D43.44)16</div>",
"id": 34
},
{
"t": "mcq",
"lv": 2,
"src": "Slides Ex 16",
"q": "(212.1)<sub>3</sub> = ( ? )<sub>9</sub>",
"opts": [
"25.3",
"23.5",
"212.1",
"25.1",
"7.3"
],
"a": 0,
"sol": "9 = 3², so <b>2 base-3 digits = 1 base-9 digit</b>. Group outward from the point:<div class='steps'>02 | 12 . 10\n(02)3 = 2   (12)3 = 1·3+2 = 5   (10)3 = 3\n→ (25.3)9</div>",
"id": 35
},
{
"t": "in",
"lv": 2,
"src": "Book 1.7",
"q": "Convert (64CD)<sub>16</sub> to octal (through binary).",
"acc": [
"62315"
],
"num": false,
"lz": true,
"hint": "",
"sol": "<div class='steps'>64CD → 0110 0100 1100 1101\nregroup by 3 from the right: 0 110 010 011 001 101\n→ 0 6 2 3 1 5 → (62315)8</div>",
"id": 36
},
{
"t": "mcq",
"lv": 2,
"src": "Book 1.8",
"q": "(431)<sub>10</sub> in binary is:",
"opts": [
"1 1010 1111",
"1 1110 1011",
"1 1010 1101",
"1 0101 1111",
"1 1011 1111"
],
"a": 0,
"sol": "Fast route: decimal → hex → binary.<table><tr><th>Number ÷ 16</th><th>Quotient</th><th>Remainder</th><th>Coef.</th></tr><tr><td>431 ÷ 16</td><td>26</td><td>F</td><td>a<sub>0</sub></td></tr><tr><td>26 ÷ 16</td><td>1</td><td>A</td><td>a<sub>1</sub></td></tr><tr><td>1 ÷ 16</td><td>0</td><td>1</td><td>a<sub>2</sub></td></tr></table><p>Read remainders <b>bottom → top</b> (last remainder = MSB): <b>(1AF)<sub>16</sub></b></p><div class='steps'>1AF → 0001 1010 1111 → 110101111</div>",
"id": 37
},
{
"t": "mcq",
"lv": 2,
"src": "HW 1-9",
"q": "(68BE)<sub>16</sub> = ( ? )<sub>8</sub>",
"opts": [
"64276",
"68276",
"64267",
"32276",
"64376"
],
"a": 0,
"sol": "<div class='steps'>68BE → 0110 1000 1011 1110\nby 3 from the right: 000 110 100 010 111 110\n                     0   6   4   2   7   6</div>",
"id": 38
},
{
"t": "mcq",
"lv": 2,
"src": "First Exam 2017 Q3",
"q": "The unsigned number (AF.16C)<sub>16</sub> is equivalent to:",
"opts": [
"(257.0554)<sub>8</sub>",
"(307.0234)<sub>8</sub>",
"(157.0534)<sub>8</sub>",
"(157.0558)<sub>8</sub>",
"(157.0568)<sub>8</sub>"
],
"a": 0,
"sol": "<div class='steps'>AF.16C → 1010 1111 . 0001 0110 1100\nregroup by 3 outward from the point:\n010 101 111 . 000 101 101 100\n  2   5   7 .   0   5   5   4</div><p>Options c and d contain the digit 8, so they can't be octal. <b>Official answer: (e)</b>.</p>",
"id": 39
},
{
"t": "mcq",
"lv": 2,
"src": "First Exam 2017 Q5",
"q": "The equivalent of (103.023)<sub>8</sub> in hexadecimal is:",
"opts": [
"(43.098)<sub>16</sub>",
"(13.2C)<sub>16</sub>",
"(13.23)<sub>16</sub>",
"(43.091)<sub>16</sub>",
"(F0.12)<sub>16</sub>"
],
"a": 0,
"sol": "<div class='steps'>103.023 → 001 000 011 . 000 010 011\nregroup by 4: 0100 0011 . 0000 1001 1(000)\n              4    3   .  0    9    8</div>",
"id": 40
},
{
"t": "in",
"lv": 2,
"src": "HW 1-11(a)",
"q": "Convert (34.4375)<sub>10</sub> to binary.",
"acc": [
"100010.0111"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<table><tr><th>Number ÷ 2</th><th>Quotient</th><th>Remainder</th><th>Coef.</th></tr><tr><td>34 ÷ 2</td><td>17</td><td>0</td><td>a<sub>0</sub></td></tr><tr><td>17 ÷ 2</td><td>8</td><td>1</td><td>a<sub>1</sub></td></tr><tr><td>8 ÷ 2</td><td>4</td><td>0</td><td>a<sub>2</sub></td></tr><tr><td>4 ÷ 2</td><td>2</td><td>0</td><td>a<sub>3</sub></td></tr><tr><td>2 ÷ 2</td><td>1</td><td>0</td><td>a<sub>4</sub></td></tr><tr><td>1 ÷ 2</td><td>0</td><td>1</td><td>a<sub>5</sub></td></tr></table><p>Read remainders <b>bottom → top</b> (last remainder = MSB): <b>(100010)<sub>2</sub></b></p><table><tr><th>Fraction × 2</th><th>Result</th><th>Integer → digit</th></tr><tr><td>0.4375 × 2</td><td>0.875</td><td>0 (a<sub>-1</sub>)</td></tr><tr><td>0.875 × 2</td><td>1.75</td><td>1 (a<sub>-2</sub>)</td></tr><tr><td>0.75 × 2</td><td>1.5</td><td>1 (a<sub>-3</sub>)</td></tr><tr><td>0.5 × 2</td><td>1</td><td>1 (a<sub>-4</sub>)</td></tr></table><p>Read integer parts <b>top → bottom</b> (first = MSB after the point): <b>(0.0111)<sub>2</sub></b></p>",
"id": 41
},
{
"t": "mcq",
"lv": 2,
"src": "Book 1.9(d)",
"q": "(DADA.B)<sub>16</sub> = ( ? )<sub>10</sub>",
"opts": [
"56026.6875",
"56026.11",
"55962.6875",
"48858.6875",
"56026.11875"
],
"a": 0,
"sol": "<div class='steps'>D·16³ + A·16² + D·16 + A + B/16\n= 13·4096 + 10·256 + 13·16 + 10 + 11/16\n= 53248 + 2560 + 208 + 10 + 0.6875 = 56026.6875</div>",
"id": 42
},
{
"t": "mcq",
"lv": 2,
"src": "Book 1.10",
"q": "(1.10010)<sub>2</sub> = 1.5625 and (110.010)<sub>2</sub> = 6.25. Why is the second exactly 4 times the first?",
"opts": [
"The binary point moved 2 places right, which multiplies by 2² = 4",
"Because 110 is 4 times 1",
"Because hex 6.4 is 4 times hex 1.9 by coincidence",
"Because the second has 4 more ones",
"It isn't 4 times. It's 2 times"
],
"a": 0,
"sol": "<div class='steps'>1.10010 → shift the point two places right → 110.010\neach place right multiplies by the base (2) → ×2×2 = ×4\nhex: 1.10010 = (1.9)16 = 1.5625      110.010 = (6.4)16 = 6.25</div>",
"id": 43
},
{
"t": "in",
"lv": 2,
"src": "Master",
"q": "Convert (3021.13)<sub>4</sub> directly to hexadecimal.",
"acc": [
"C9.7"
],
"num": false,
"lz": false,
"hint": "",
"sol": "16 = 4², so 2 base-4 digits = 1 hex digit. Group from the point:<div class='steps'>30 | 21 . 13\n(30)4 = 12 = C   (21)4 = 9   (13)4 = 7\n→ (C9.7)16</div>",
"id": 44
},
{
"t": "mcq",
"lv": 2,
"src": "Master",
"q": "Which decimal fraction can be written <b>exactly</b> with a finite number of bits?",
"opts": [
"0.375",
"0.1",
"0.2",
"0.3",
"0.6"
],
"a": 0,
"sol": "A fraction terminates in base 2 only if its reduced denominator is a power of 2.<div class='steps'>0.375 = 3/8   → denominator 8 = 2³ ✓ → 0.011\n0.1 = 1/10, 0.2 = 1/5, 0.3 = 3/10, 0.6 = 3/5 → factor 5 → repeat forever</div>",
"id": 45
},
{
"t": "mcq",
"lv": 2,
"src": "HW 1-11(b)",
"q": "1/3 converted to binary and cut off at 8 places, then converted back to decimal, gives:",
"opts": [
"0.33203125",
"0.33333333",
"0.3333",
"0.3359375",
"0.328125"
],
"a": 0,
"sol": "<table><tr><th>Fraction × 2</th><th>Result</th><th>Integer → digit</th></tr><tr><td>1/3 × 2</td><td>2/3</td><td>0 (a<sub>-1</sub>)</td></tr><tr><td>2/3 × 2</td><td>4/3</td><td>1 (a<sub>-2</sub>)</td></tr><tr><td>1/3 × 2</td><td>2/3</td><td>0 (a<sub>-3</sub>)</td></tr><tr><td>2/3 × 2</td><td>4/3</td><td>1 (a<sub>-4</sub>)</td></tr><tr><td>1/3 × 2</td><td>2/3</td><td>0 (a<sub>-5</sub>)</td></tr><tr><td>2/3 × 2</td><td>4/3</td><td>1 (a<sub>-6</sub>)</td></tr><tr><td>1/3 × 2</td><td>2/3</td><td>0 (a<sub>-7</sub>)</td></tr><tr><td>2/3 × 2</td><td>4/3</td><td>1 (a<sub>-8</sub>)</td></tr></table><p>Read integer parts <b>top → bottom</b> (first = MSB after the point): <b>(0.01010101…)<sub>2</sub></b></p><div class='steps'>0.01010101 = 1/4 + 1/16 + 1/64 + 1/256 = 85/256 = 0.33203125\nerror = 1/3 − 0.33203125 ≈ 0.0013</div>",
"id": 46
},
{
"t": "in",
"lv": 2,
"src": "Master",
"q": "Convert (A7.4)<sub>16</sub> directly to base 4.",
"acc": [
"2213.1"
],
"num": false,
"lz": false,
"hint": "",
"sol": "16 = 4², so each hex digit becomes 2 base-4 digits (4 bits = 2 pairs):<div class='steps'>A = 1010 → 10 10 → 2 2\n7 = 0111 → 01 11 → 1 3\n4 = 0100 → 01 00 → 1 0 → drop the trailing 0\n→ (2213.1)4   check: 167.25 both ways</div>",
"id": 47
},
{
"t": "mcq",
"lv": 2,
"src": "Master",
"q": "(1234)<sub>5</sub> = ( ? )<sub>25</sub>",
"opts": [
"(7J)<sub>25</sub>",
"(19 7)<sub>25</sub>",
"(J7)<sub>25</sub>",
"(194)<sub>25</sub>",
"(7I)<sub>25</sub>"
],
"a": 0,
"sol": "25 = 5², so group 2 base-5 digits:<div class='steps'>12 | 34\n(12)5 = 7   (34)5 = 3·5+4 = 19 = J\n→ (7J)25   check: 7·25 + 19 = 194 = (1234)5 ✓</div>",
"id": 48
},
{
"t": "in",
"lv": 3,
"src": "Slides p.17",
"q": "Add in binary: 111101 + 10111",
"acc": [
"1010100"
],
"num": false,
"lz": true,
"hint": "",
"sol": "<div class='steps'>carries   1 1 1 1 1 1\n            1 1 1 1 0 1   (61)\n        +     1 0 1 1 1   (23)\n        ─────────────────\n          1 0 1 0 1 0 0   (84)</div><p>Rule: 1+1 = 10 (write 0, carry 1) and 1+1+1 = 11 (write 1, carry 1).</p>",
"id": 49
},
{
"t": "mcq",
"lv": 3,
"src": "Slides p.18",
"q": "1001101 − 10111 = ?",
"opts": [
"0110110 (= 54)",
"0111010 (= 58)",
"1110110 (= 118)",
"0100110 (= 38)",
"0110100 (= 52)"
],
"a": 0,
"sol": "<div class='steps'>     1 0 0 1 1 0 1   (77)\n   −     1 0 1 1 1   (23)\n   ─────────────────\n     0 1 1 0 1 1 0   (54)</div><p>Whenever the top bit is 0 and the bottom bit is 1, borrow from the left. The borrowed 1 is worth 2 in this column.</p>",
"id": 50
},
{
"t": "mcq",
"lv": 3,
"src": "Slides p.19",
"q": "10111 × 1010 = ?",
"opts": [
"11100110",
"11001110",
"1110011",
"111001100",
"10111010"
],
"a": 0,
"sol": "<div class='steps'>        1 0 1 1 1\n      ×   1 0 1 0\n      ───────────\n        0 0 0 0 0      (×0)\n      1 0 1 1 1        (×1, shift 1)\n    0 0 0 0 0          (×0, shift 2)\n  1 0 1 1 1            (×1, shift 3)\n  ───────────────\n  1 1 1 0 0 1 1 0   = 230 = 23 × 10 ✓</div>",
"id": 51
},
{
"t": "mcq",
"lv": 3,
"src": "Book 1.11",
"q": "111011 ÷ 101 in binary gives:",
"opts": [
"quotient 1011, remainder 100",
"quotient 1011, remainder 0",
"quotient 1101, remainder 100",
"quotient 1011, remainder 11",
"quotient 111, remainder 110"
],
"a": 0,
"sol": "<div class='steps'>111011 = 59,  101 = 5  → 59 = 5 × 11 + 4\n11 = 1011,  4 = 100</div><p>Long division: 111−101 = 10 (q 1), bring down 0 → 100 &lt; 101 (q 0), bring down 1 → 1001−101 = 100 (q 1), bring down 1 → 1001−101 = 100 (q 1).</p>",
"id": 52
},
{
"t": "mcq",
"lv": 3,
"src": "Book 1.12(a)",
"q": "Binary: 1011 + 101 and 1011 × 101 are:",
"opts": [
"10000 and 110111",
"1110 and 110111",
"10000 and 111011",
"10010 and 110111",
"10000 and 101111"
],
"a": 0,
"sol": "<div class='steps'>1011 + 101:   11 + 5 = 16 = 10000\n1011 × 101:   1011 + 101100 = 110111 = 55 = 11 × 5 ✓</div>",
"id": 53
},
{
"t": "in",
"lv": 3,
"src": "Book 1.12(b)",
"q": "Multiply in hex (without converting to decimal): (2E)<sub>16</sub> × (34)<sub>16</sub> = ?",
"acc": [
"958"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>2E × 4:  E·4 = 56 = 3·16 + 8 → write 8, carry 3;  2·4 + 3 = 11 = B  → B8\n2E × 3:  E·3 = 42 = 2·16 + 10 → write A, carry 2; 2·3 + 2 = 8   → 8A (shift)\n      B8\n   + 8A0\n   ─────\n     958        check: 46 × 52 = 2392 = 0x958 ✓</div>",
"id": 54
},
{
"t": "mcq",
"lv": 3,
"src": "Hex arithmetic",
"q": "(F9)<sub>16</sub> + (A7)<sub>16</sub> = ?",
"opts": [
"(1A0)<sub>16</sub>",
"(19A)<sub>16</sub>",
"(1A10)<sub>16</sub>",
"(FA0)<sub>16</sub>",
"(1B0)<sub>16</sub>"
],
"a": 0,
"sol": "<div class='steps'>9 + 7 = 16 ≥ 16 → 16−16 = 0, carry 1\nF + A + 1 = 15 + 10 + 1 = 26 → 26−16 = 10 = A, carry 1\n→ 1A0   (249 + 167 = 416 = 0x1A0 ✓)</div>",
"id": 55
},
{
"t": "in",
"lv": 3,
"src": "Octal arithmetic",
"q": "Add in octal: (457)<sub>8</sub> + (365)<sub>8</sub> = ?",
"acc": [
"1044"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>7 + 5 = 12 ≥ 8 → 12 − 8 = 4, carry 1\n5 + 6 + 1 = 12 → 4, carry 1\n4 + 3 + 1 = 8 → 0, carry 1\n→ (1044)8</div>",
"id": 56
},
{
"t": "mcq",
"lv": 3,
"src": "Master",
"q": "(34)<sub>5</sub> × (23)<sub>5</sub> = ?",
"opts": [
"(1442)<sub>5</sub>",
"(782)<sub>5</sub>",
"(1342)<sub>5</sub>",
"(247)<sub>5</sub>",
"(2442)<sub>5</sub>"
],
"a": 0,
"sol": "<div class='steps'>(34)5 = 19,  (23)5 = 13  → 19 × 13 = 247\n247 ÷ 5 = 49 r 2;  49 ÷ 5 = 9 r 4;  9 ÷ 5 = 1 r 4;  1 ÷ 5 = 0 r 1\n→ (1442)5</div><p>(782)<sub>5</sub> isn't even valid: 7 and 8 are not base-5 digits.</p>",
"id": 57
},
{
"t": "in",
"lv": 3,
"src": "Master",
"q": "Add in binary: 1010.11 + 11.011 = ?",
"acc": [
"1110.001"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>  1010.110      (align the points, pad zeros)\n+ 0011.011\n──────────\n  1110.001   = 10.75 + 3.375 = 14.125 ✓</div>",
"id": 58
},
{
"t": "mcq",
"lv": 3,
"src": "Master",
"q": "(A03)<sub>16</sub> − (1FF)<sub>16</sub> = ?",
"opts": [
"(804)<sub>16</sub>",
"(904)<sub>16</sub>",
"(814)<sub>16</sub>",
"(7F4)<sub>16</sub>",
"(805)<sub>16</sub>"
],
"a": 0,
"sol": "<div class='steps'>units: 3 − F → borrow: 3 + 16 − 15 = 4\n16s:   0 − 1 (borrowed) → 0 is now −1 → borrow: 16 − 1 − F = 0\n256s:  A − 1 (borrowed) − 1 = 8\n→ 804   check: 2563 − 511 = 2052 = 0x804 ✓</div>",
"id": 59
},
{
"t": "mcq",
"lv": 3,
"src": "Master",
"q": "In base 7: (64)<sub>7</sub> + (55)<sub>7</sub> = ?",
"opts": [
"(152)<sub>7</sub>",
"(119)<sub>7</sub>",
"(142)<sub>7</sub>",
"(86)<sub>7</sub>",
"(151)<sub>7</sub>"
],
"a": 0,
"sol": "<div class='steps'>4 + 5 = 9 ≥ 7 → 9 − 7 = 2, carry 1\n6 + 5 + 1 = 12 → 12 − 7 = 5, carry 1\n→ (152)7    check: 46 + 40 = 86 = 49 + 35 + 2 ✓</div>",
"id": 60
},
{
"t": "mcq",
"lv": 3,
"src": "Final 2023 Q8 (bridge)",
"q": "A ROM stores the product of two 4-bit unsigned integers (both numbers are the address). The ROM size needed is:",
"opts": [
"256 × 8",
"16 × 4",
"4 × 4",
"16 × 8",
"256 × 4"
],
"a": 0,
"sol": "<div class='steps'>Inputs: 4 + 4 = 8 address bits → 2⁸ = 256 words\nLargest product: 15 × 15 = 225 &lt; 256 = 2⁸ → 8 output bits</div><p>A rule worth remembering: an n-bit × m-bit product needs n + m bits. <b>Official answer: (b)</b>.</p>",
"id": 61
},
{
"t": "mcq",
"lv": 4,
"src": "First Exam 2017 Q1",
"q": "The 2's complement of (0010110) is:",
"opts": [
"1101010",
"0001010",
"1001001",
"1011001",
"1101001"
],
"a": 0,
"sol": "<div class='steps'>Fast method: keep bits from the right up to and including the first 1, flip the rest\n0 0 1 0 1 | 1 0   → keep '10'\n1 1 0 1 0 | 1 0   → 1101010\nCheck (1's + 1): 1101001 + 1 = 1101010 ✓</div><p>1101001 is only the 1's complement. <b>Official answer: (a)</b>.</p>",
"id": 62
},
{
"t": "mcq",
"lv": 4,
"src": "First Exam 2017 Q4",
"q": "The value (−53)<sub>10</sub> in 8-bit 2's complement is equivalent to:",
"opts": [
"(CB)<sub>16</sub>",
"(FB)<sub>16</sub>",
"(2B)<sub>16</sub>",
"(2EB)<sub>16</sub>",
"(B5)<sub>16</sub>"
],
"a": 0,
"sol": "<div class='steps'>+53 = 0011 0101\n1's  = 1100 1010\n+1   = 1100 1011 → C B</div><p>8 bits = 2 hex digits, so 2EB and 2FEB are impossible. B5 = 1011 0101 is the signed-magnitude form. <b>Official answer: (a)</b>.</p>",
"id": 63
},
{
"t": "in",
"lv": 4,
"src": "Slides p.43",
"q": "Write the 1's complement of 10110000.",
"acc": [
"01001111"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>flip every bit: 1→0, 0→1\n10110000 → 01001111\ncheck: 10110000 + 01001111 = 11111111 ✓</div>",
"id": 64
},
{
"t": "mcq",
"lv": 4,
"src": "HW 1-16(d)",
"q": "The 2's complement of 10000000 (8 bits) is:",
"opts": [
"10000000",
"01111111",
"01111110",
"00000000",
"11111111"
],
"a": 0,
"sol": "<div class='steps'>1's comp: 01111111\n+1:       10000000   ← the same number!</div><p>In 8-bit 2's complement, 10000000 = −128, and +128 doesn't fit in 8 bits. So −128 has no positive partner and complementing it gives it back.</p>",
"id": 65
},
{
"t": "mcq",
"lv": 4,
"src": "HW 1-16(e)",
"q": "The 1's and 2's complements of 00000000 are:",
"opts": [
"11111111 and 00000000",
"11111111 and 11111111",
"00000000 and 00000001",
"11111111 and 100000000",
"00000000 and 00000000"
],
"a": 0,
"sol": "<div class='steps'>1's: 11111111\n2's: 11111111 + 1 = 1 00000000 → discard the carry → 00000000</div><p>That's why 2's complement has a single zero, and 1's complement has two (00000000 = +0, 11111111 = −0).</p>",
"id": 66
},
{
"t": "mcq",
"lv": 4,
"src": "Book 1.14(c)",
"q": "For 11011010, the 1's and 2's complements are:",
"opts": [
"00100101 and 00100110",
"00100101 and 00100100",
"00100110 and 00100101",
"11011011 and 00100110",
"00100101 and 00101010"
],
"a": 0,
"sol": "<div class='steps'>1's: flip → 00100101\n2's: 00100101 + 1 = 00100110\nshortcut: 110110|10 → keep '10' (up to the first 1 from the right), flip the rest → 001001|10 ✓</div>",
"id": 67
},
{
"t": "in",
"lv": 4,
"src": "Book 1.15(b)",
"q": "Find the 10's complement of 63,325,600 (type digits only).",
"acc": [
"36674400"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>9's comp: 9−each digit → 36,674,399\n10's comp: +1 → 36,674,400\nShortcut: keep the trailing zeros, 10 − 6 = 4, then 9 − each digit to the left</div>",
"id": 68
},
{
"t": "mcq",
"lv": 4,
"src": "Book 1.15(c)",
"q": "The 9's complement of 25,000,000 is:",
"opts": [
"74,999,999",
"75,000,000",
"74,000,000",
"25,999,999",
"75,999,999"
],
"a": 0,
"sol": "<div class='steps'>99,999,999 − 25,000,000 = 74,999,999</div><p>75,000,000 is the 10's complement.</p>",
"id": 69
},
{
"t": "in",
"lv": 4,
"src": "Book 1.16(a)",
"q": "Find the 16's complement of (C3DF)<sub>16</sub>.",
"acc": [
"3C21"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>15's comp: F − each digit → F−C=3, F−3=C, F−D=2, F−F=0 → 3C20\n16's comp: +1 → 3C21\nCheck via binary: C3DF = 1100 0011 1101 1111 → 2's comp = 0011 1100 0010 0001 = 3C21 ✓</div>",
"id": 70
},
{
"t": "mcq",
"lv": 4,
"src": "Book 1.17(c)",
"q": "Using the 10's complement, 2043 − 4361 gives:",
"opts": [
"2043 + 5639 = 7682, no end carry, so the answer is −2318",
"2043 + 5639 = 7682, discard the carry, so the answer is 7682",
"2043 + 5639 = 7682, end carry, so the answer is +2318",
"2043 + 4361 = 6404, so −6404",
"2043 + 5638 = 7681, end-around carry, so −2319"
],
"a": 0,
"sol": "<div class='steps'>10's comp of 4361 = 5639\n2043 + 5639 = 7682  ← 4 digits, no end carry → negative\nanswer = −(10's comp of 7682) = −2318   ✓ (2043 − 4361 = −2318)</div>",
"id": 71
},
{
"t": "mcq",
"lv": 4,
"src": "Book 1.18(c)",
"q": "Using the 2's complement, 1001 − 110101 = ?",
"opts": [
"−101100",
"−101011",
"101100",
"−010100",
"010100"
],
"a": 0,
"sol": "<div class='steps'>Equalize lengths: M = 001001, N = 110101\n2's comp of N = 001011\n001001 + 001011 = 010100 → no end carry → negative\n2's comp of 010100 = 101100 → answer −101100 (= 9 − 53 = −44 ✓)</div><div class='trap'>You have to pad M with zeros first. Without that, the complement is taken over the wrong number of bits.</div>",
"id": 72
},
{
"t": "in",
"lv": 4,
"src": "HW 1-18(b)",
"q": "Using the 2's complement of the subtrahend: 110100 − 10101 = ? (binary)",
"acc": [
"11111"
],
"num": false,
"lz": true,
"hint": "",
"sol": "<div class='steps'>pad: N = 010101 → 2's comp = 101011\n110100 + 101011 = 1 011111 → end carry → discard\nanswer = 011111 = 11111  (52 − 21 = 31 ✓)</div>",
"id": 73
},
{
"t": "mcq",
"lv": 4,
"src": "HW 1-18(d)",
"q": "Using the 2's complement: 101010 − 101011 = ?",
"opts": [
"−1",
"+1",
"−111111",
"111111",
"−0"
],
"a": 0,
"sol": "<div class='steps'>2's comp of 101011 = 010101\n101010 + 010101 = 111111 → no carry → negative\n2's comp of 111111 = 000001 → −1   (42 − 43 = −1 ✓)</div>",
"id": 74
},
{
"t": "mcq",
"lv": 4,
"src": "Slides p.52",
"q": "When subtracting with <b>1's complement</b> addition, an end carry of 1 means:",
"opts": [
"Add the carry to the LSB (end-around carry); the result is positive",
"Discard it; the result is positive",
"The result is negative and must be complemented",
"An overflow has happened",
"Add the carry to the MSB"
],
"a": 0,
"sol": "<div class='steps'>5 − 1 → 0101 + 1110 = 1 0011\ncarry = 1 → 0011 + 1 = 0100 = +4</div><p>In <b>2's</b> complement you discard the carry. In <b>1's</b> complement you wrap it around and add it to the LSB.</p>",
"id": 75
},
{
"t": "mcq",
"lv": 4,
"src": "Slides p.50",
"q": "The range of 8-bit signed 2's complement numbers is:",
"opts": [
"−128 to +127",
"−127 to +127",
"−128 to +128",
"0 to 255",
"−127 to +128"
],
"a": 0,
"sol": "<div class='steps'>n = 8: −2⁷ … 2⁷ − 1 = −128 … +127</div><p>−127…+127 is the range for signed magnitude and 1's complement, which each have two zeros.</p>",
"id": 76
},
{
"t": "mcq",
"lv": 4,
"src": "Slides p.48",
"q": "For n-bit signed 1's complement, the range is:",
"opts": [
"−(2ⁿ⁻¹ − 1) ≤ N ≤ +(2ⁿ⁻¹ − 1)",
"−2ⁿ⁻¹ ≤ N ≤ 2ⁿ⁻¹ − 1",
"0 ≤ N ≤ 2ⁿ − 1",
"−2ⁿ ≤ N ≤ 2ⁿ − 1",
"−(2ⁿ⁻¹ + 1) ≤ N ≤ 2ⁿ⁻¹"
],
"a": 0,
"sol": "For 4 bits: −7 … +7. The pattern 1111 is −0, which wastes one code, so the range is symmetric.",
"id": 77
},
{
"t": "mcq",
"lv": 4,
"src": "Slides p.51",
"q": "The 4-bit pattern 1101 means ___ in unsigned / signed-magnitude / 1's comp / 2's comp:",
"opts": [
"13 / −5 / −2 / −3",
"13 / −5 / −3 / −2",
"13 / −3 / −2 / −5",
"−5 / 13 / −2 / −3",
"13 / −6 / −2 / −3"
],
"a": 0,
"sol": "<div class='steps'>unsigned:  8+4+1 = 13\nsign-mag:  sign 1, magnitude 101 = 5 → −5\n1's comp:  flip → 0010 = 2 → −2\n2's comp:  −8 + 4 + 1 = −3  (or flip+1 → 0011 → −3)</div>",
"id": 78
},
{
"t": "mcq",
"lv": 4,
"src": "Slides p.47–49",
"q": "Which representations have <b>two</b> representations of zero?",
"opts": [
"Signed magnitude and signed 1's complement",
"Only signed 2's complement",
"Only signed magnitude",
"All three signed systems",
"Signed 1's and 2's complement"
],
"a": 0,
"sol": "<div class='steps'>Sign-mag: 0000 (+0) and 1000 (−0)\n1's comp: 0000 (+0) and 1111 (−0)\n2's comp: only 0000 (1111 + 1 = 1 0000 → 0000)</div>",
"id": 79
},
{
"t": "mcq",
"lv": 4,
"src": "Book 1.20",
"q": "Using 8-bit signed 2's complement, (−29) + (−49) = ?",
"opts": [
"11100011 + 11001111 = 1 10110010 → 10110010 = −78",
"11100011 + 11001111 = 10110010 → +50 (overflow)",
"11100010 + 11001110 = 10110000 = −80",
"10011101 + 10110001 = 01001110 = +78",
"11100011 + 11001111 = 10110010 → −50"
],
"a": 0,
"sol": "<div class='steps'>+29 = 00011101 → −29 = 11100011\n+49 = 00110001 → −49 = 11001111\n  11100011\n+ 11001111\n= 1 10110010 → discard carry → 10110010\n10110010 = −128 + 32 + 16 + 2 = −78 ✓</div><div class='trap'>With 7 bits the range is only −64…+63, so −78 overflows: 1100011 + 1001111 = 1 0110010 = +50, which has the wrong sign. That's why the book says to use \"enough digits\".</div>",
"id": 80
},
{
"t": "in",
"lv": 4,
"src": "HW 1-20",
"q": "In 8-bit signed 2's complement, compute (+27) + (−61). Give the 8-bit result.",
"acc": [
"11011110"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>+27 = 00011011\n+61 = 00111101 → −61 = 11000011\n00011011 + 11000011 = 11011110 (no carry)\n11011110 → 2's comp 00100010 = 34 → −34 ✓</div>",
"id": 81
},
{
"t": "mcq",
"lv": 4,
"src": "Book 1.19(b)",
"q": "Signed 10's complement (6 digits incl. sign): (+9286) + (−801) = ?",
"opts": [
"009286 + 999199 = 1 008485 → +8485",
"009286 + 999199 = 1008485 → −8485",
"009286 + 999198 = 1008484 → +8484",
"009286 + 000801 = 010087 → +10087",
"990714 + 000801 = 991515 → −8485"
],
"a": 0,
"sol": "<div class='steps'>−801 → 10's comp of 000801 = 999199\n009286 + 999199 = 1 008485 → discard the end carry\nsign digit 0 → positive → +8485 ✓</div>",
"id": 82
},
{
"t": "mcq",
"lv": 4,
"src": "Overflow",
"q": "Which 8-bit 2's complement addition <b>overflows</b>?",
"opts": [
"01100100 + 00110010",
"01100100 + 11001110",
"11110000 + 11110000",
"10000001 + 01111111",
"00000001 + 01111110"
],
"a": 0,
"sol": "<div class='steps'>01100100 (+100) + 00110010 (+50) = 10010110 → negative! +150 &gt; +127 → OVERFLOW\n100 + (−50) = 50 ✓   −16 + −16 = −32 ✓   −127 + 127 = 0 ✓   1 + 126 = 127 ✓</div><p>Overflow only happens when both operands have the <b>same sign</b> and the result's sign is different.</p>",
"id": 83
},
{
"t": "mcq",
"lv": 4,
"src": "Sign extension",
"q": "−5 is 1011 in 4-bit 2's complement. In 8 bits it is:",
"opts": [
"11111011",
"00001011",
"10001011",
"11110101",
"10000101"
],
"a": 0,
"sol": "Copy the sign bit into the new positions:<div class='steps'>1011 → 1111 1011  (check: −128+64+32+16+8+2+1 = −5 ✓)</div><p>10000101 is −5 in 8-bit <b>signed magnitude</b>.</p>",
"id": 84
},
{
"t": "in",
"lv": 4,
"src": "Master",
"q": "Write −53 in <b>16-bit</b> 2's complement, in hex.",
"acc": [
"FFCB"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>8-bit: −53 = CB = 1100 1011\nsign-extend to 16 bits: 1111 1111 1100 1011 = FFCB\ncheck: 0x10000 − 53 = 65483 = 0xFFCB ✓</div>",
"id": 85
},
{
"t": "mcq",
"lv": 4,
"src": "Master",
"q": "The 8-bit pattern 10000000 means ___ in unsigned / sign-magnitude / 1's comp / 2's comp:",
"opts": [
"128 / −0 / −127 / −128",
"128 / −0 / −128 / −127",
"−128 / −0 / −127 / 128",
"128 / −128 / −127 / −0",
"128 / 0 / −127 / −128"
],
"a": 0,
"sol": "<div class='steps'>unsigned: 2⁷ = 128\nsign-mag: sign 1, magnitude 0 → −0\n1's: flip → 01111111 = 127 → −127\n2's: −2⁷ = −128</div>",
"id": 86
},
{
"t": "mcq",
"lv": 4,
"src": "Master",
"q": "For N = (2301)<sub>4</sub>, the 3's and 4's complements are:",
"opts": [
"1032 and 1033",
"1032 and 1031",
"2301 and 2302",
"1033 and 1032",
"1132 and 1133"
],
"a": 0,
"sol": "<div class='steps'>(r−1)'s = 3 − each digit: 3−2, 3−3, 3−0, 3−1 → 1 0 3 2\nr's = (r−1)'s + 1 = 1033 (base 4, 2+1 = 3, no carry)\ncheck: 2301 + 1033 = 10000 (base 4) ✓</div>",
"id": 87
},
{
"t": "mcq",
"lv": 4,
"src": "Master",
"q": "The 2's complement of 1010.0110 is:",
"opts": [
"0101.1010",
"0101.1001",
"0101.1011",
"1010.1010",
"0110.1010"
],
"a": 0,
"sol": "<div class='steps'>Treat it as one bit string: 10100110 → keep through the first 1 from the right: '10'\nflip the rest: 010110|10 → 01011010 → 0101.1010\ncheck: 10.375 + 5.625 = 16 = 2⁴ ✓</div>",
"id": 88
},
{
"t": "mcq",
"lv": 4,
"src": "Master",
"q": "How many <b>distinct values</b> can 6-bit signed 1's complement represent?",
"opts": [
"63",
"64",
"32",
"62",
"31"
],
"a": 0,
"sol": "<div class='steps'>2⁶ = 64 patterns, but +0 (000000) and −0 (111111) are the same value\n→ 63 values: −31 … +31</div>",
"id": 89
},
{
"t": "in",
"lv": 4,
"src": "Master",
"q": "An 8-bit register holds (9C)<sub>16</sub> as a signed 2's complement number. What is its decimal value?",
"acc": [
"-100"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>9C = 1001 1100 → MSB 1 → negative\nweight method: −128 + 16 + 8 + 4 = −100\nor: 2's comp = 0110 0100 = 100 → −100</div>",
"id": 90
},
{
"t": "mcq",
"lv": 4,
"src": "Master",
"q": "What is the largest positive number in 12-bit 2's complement?",
"opts": [
"(7FF)<sub>16</sub> = 2047",
"(FFF)<sub>16</sub> = 4095",
"(800)<sub>16</sub> = 2048",
"(7FF)<sub>16</sub> = 2048",
"(3FF)<sub>16</sub> = 1023"
],
"a": 0,
"sol": "<div class='steps'>2¹¹ − 1 = 2047 = 0111 1111 1111 = 7FF</div>",
"id": 91
},
{
"t": "mcq",
"lv": 5,
"src": "Slides p.42",
"q": "What is the minimum number of bits needed to encode the 10 decimal digits?",
"opts": [
"4",
"3",
"10",
"5",
"3.32"
],
"a": 0,
"sol": "<div class='steps'>n ≥ ⌈log₂ M⌉ = ⌈log₂ 10⌉ = ⌈3.32⌉ = 4\n3 bits → only 8 codes (too few). 4 bits → 16 codes ≥ 10 ✓</div>",
"id": 92
},
{
"t": "in",
"lv": 5,
"src": "Book 1.27",
"q": "What is the minimum number of bits needed to give each of the 52 playing cards a unique code?",
"acc": [
"6"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>2⁵ = 32 &lt; 52 ≤ 64 = 2⁶ → 6 bits</div>",
"id": 93
},
{
"t": "in",
"lv": 5,
"src": "HW 1-24(a)",
"q": "Represent 6027 in BCD (type 16 bits; spaces optional).",
"acc": [
"0110000000100111"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>6 → 0110   0 → 0000   2 → 0010   7 → 0111\n→ 0110 0000 0010 0111</div><div class='trap'>Don't convert 6027 to plain binary (1011110001011). BCD encodes each digit separately.</div>",
"id": 94
},
{
"t": "mcq",
"lv": 5,
"src": "First Exam 2017 Q6",
"q": "(1000.0111)<sub>BCD</sub> + (0111.0110)<sub>BCD</sub> = ?",
"opts": [
"(00010110.0011)<sub>BCD</sub>",
"(1111.1101)<sub>BCD</sub>",
"(0000.0011)<sub>BCD</sub>",
"(00010000.0011)<sub>BCD</sub>",
"(00011110.0011)<sub>BCD</sub>"
],
"a": 0,
"sol": "<div class='steps'>This is 8.7 + 7.6 = 16.3\ntenths: 0111 + 0110 = 1101 &gt; 9 → +0110 = 1 0011 → 3, carry 1\nunits:  1000 + 0111 + 1 = 1 0000 (carry out) → +0110 → 1 0110 → 6, carry 1\ntens:   0001\n→ 0001 0110 . 0011</div><p>1111.1101 is the raw binary sum with no correction, which isn't valid BCD. <b>Official answer: (d)</b>.</p>",
"id": 95
},
{
"t": "mcq",
"lv": 5,
"src": "Slides p.55–56",
"q": "In BCD addition, 0101 + 0101 = 1010. What's the correct next step?",
"opts": [
"Add 0110 → 1 0000 → 0001 0000 (= 10)",
"Nothing, 1010 is the answer",
"Subtract 0110 → 0100",
"Add 0011 → 1101",
"Add 1010 → 1 0100"
],
"a": 0,
"sol": "1010 is an invalid BCD code (&gt; 9). Adding 6 skips the six invalid codes 1010–1111:<div class='steps'>1010 + 0110 = 1 0000 → digit 0, carry 1 → 0001 0000 = 10 ✓</div>",
"id": 96
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.23",
"q": "791 + 658 in BCD gives:",
"opts": [
"0001 0100 0100 1001",
"0001 0100 0100 1111",
"1110 1110 1001",
"0101 1010 1001 1001",
"0001 0011 0100 1001"
],
"a": 0,
"sol": "<div class='steps'>  0111 1001 0001   (791)\n+ 0110 0101 1000   (658)\nunits: 0001+1000 = 1001 = 9 ✓ (no fix)\ntens:  1001+0101 = 1110 → +0110 → 1 0100 → 4, carry 1\nhund.: 0111+0110+1 = 1110 → +0110 → 1 0100 → 4, carry 1\n→ 0001 0100 0100 1001 = 1449 ✓</div>",
"id": 97
},
{
"t": "in",
"lv": 5,
"src": "Book 1.25(b)",
"q": "Represent 6248 in Excess-3 (16 bits).",
"acc": [
"1001010101111011"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>Excess-3 = digit + 3:\n6+3 = 9 → 1001   2+3 = 5 → 0101   4+3 = 7 → 0111   8+3 = 11 → 1011\n→ 1001 0101 0111 1011</div>",
"id": 98
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.25(c)",
"q": "6248 in the 2421 code is:",
"opts": [
"1100 0010 0100 1110",
"0110 0010 0100 1000",
"1100 0010 0100 1000",
"0110 0010 0100 1110",
"1100 0010 1010 1110"
],
"a": 0,
"sol": "<div class='steps'>2421 weights: 2 4 2 1\n6 = 2+4 → 1100   2 → 0010   4 → 0100   8 = 2+4+2 → 1110</div><p>The standard 2421 code uses 1011 for 5 through 1111 for 9, which makes it self-complementing.</p>",
"id": 99
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.33",
"q": "A 12-bit register holds 100010010111. Read it as BCD / Excess-3 / 84-2-1 / binary:",
"opts": [
"897 / 564 / 871 / 2199",
"897 / 564 / 871 / 2167",
"897 / 897 / 871 / 2199",
"564 / 897 / 871 / 2199",
"897 / 564 / 817 / 2199"
],
"a": 0,
"sol": "<div class='steps'>groups: 1000 1001 0111\nBCD:      8    9    7   → 897\nExcess-3: 8−3  9−3  7−3 → 5 6 4 → 564\n84-2-1:   1000 = 8, 1001 = 8−1 = 7, 0111 = 4−2−1 = 1 → 871\nbinary:   0x897 = 8·256 + 9·16 + 7 = 2199</div>",
"id": 100
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.26",
"q": "Why are the 2421 and Excess-3 codes called <b>self-complementing</b>?",
"opts": [
"The 9's complement of a digit is obtained by taking the 1's complement of its code",
"Each code is its own 2's complement",
"They can detect single-bit errors",
"Only one bit changes between consecutive codes",
"Each code word has an even number of 1s"
],
"a": 0,
"sol": "<div class='steps'>Excess-3: 2 → 0101, 1's comp = 1010 = 7 + 3 → 7 = 9 − 2 ✓\n2421:     6248 → 1100 0010 0100 1110 → flip → 0011 1101 1011 0001 = 3751 = 9999 − 6248 ✓</div><p>\"One bit changes\" describes the Gray code. BCD 8421 is <b>not</b> self-complementing.</p>",
"id": 101
},
{
"t": "in",
"lv": 5,
"src": "Slides p.57",
"q": "Write the 4-bit Gray code for decimal 13.",
"acc": [
"1011"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>13 = 1101 binary\ng3 = b3 = 1\ng2 = b3⊕b2 = 1⊕1 = 0\ng1 = b2⊕b1 = 1⊕0 = 1\ng0 = b1⊕b0 = 0⊕1 = 1   → 1011</div>",
"id": 102
},
{
"t": "mcq",
"lv": 5,
"src": "Gray code",
"q": "The Gray code word 1101 corresponds to decimal:",
"opts": [
"9",
"13",
"11",
"10",
"14"
],
"a": 0,
"sol": "<div class='steps'>b3 = g3 = 1\nb2 = b3⊕g2 = 1⊕1 = 0\nb1 = b2⊕g1 = 0⊕0 = 0\nb0 = b1⊕g0 = 0⊕1 = 1   → 1001 = 9</div>",
"id": 103
},
{
"t": "mcq",
"lv": 5,
"src": "Slides p.57",
"q": "The defining property of the Gray code is:",
"opts": [
"Exactly one bit changes between consecutive code words",
"Each digit's code is the 1's complement of its 9's complement",
"It is a weighted code like 8421",
"It has even parity",
"It uses 3 bits per digit"
],
"a": 0,
"sol": "Gray code: 0000 → 0001 → 0011 → 0010 → 0110 … Each step flips exactly one bit, including the wrap from 15 (1000) back to 0 (0000). It is not weighted.",
"id": 104
},
{
"t": "mcq",
"lv": 5,
"src": "HW 1-29",
"q": "Decode 4A EF 68 6E 20 C4 EF E5 (8-bit, MSB = parity). Which parity is used?",
"opts": [
"\"John Doe\", odd parity",
"\"John Doe\", even parity",
"\"JohnDoe\", odd parity",
"\"Jahn Doe\", odd parity",
"\"John Doe\", no parity"
],
"a": 0,
"sol": "<div class='steps'>strip the MSB: 4A→4A J  EF→6F o  68→h  6E→n  20→space  C4→44 D  EF→o  E5→65 e\ncount the 1s per byte: 4A=3 EF=7 68=3 6E=5 20=1 C4=3 EF=7 E5=5 → all odd → ODD parity</div>",
"id": 105
},
{
"t": "mcq",
"lv": 5,
"src": "Slide homework",
"q": "Decode (MSB = parity): 11000011 01101111 11101101 11110000 11000000 01010000 01010011 01010101 11010100",
"opts": [
"\"Comp@PSUT\", even parity",
"\"Comp@PSUT\", odd parity",
"\"COMP PSUT\", even parity",
"\"Comp@psut\", even parity",
"\"Cmop@PSUT\", even parity"
],
"a": 0,
"sol": "<div class='steps'>drop the MSB, read 7 bits:\n1000011 C  1101111 o  1101101 m  1110000 p  1000000 @\n1010000 P  1010011 S  1010101 U  1010100 T\n1s per byte: 4 6 6 4 2 2 4 4 4 → all even → EVEN parity</div>",
"id": 106
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.28",
"q": "The character 'G' (100 0111) as 8-bit ASCII with <b>odd</b> parity in the MSB is:",
"opts": [
"11000111",
"01000111",
"10001111",
"11000110",
"01000110"
],
"a": 0,
"sol": "<div class='steps'>'G' = 1000111 → four 1s (even)\nodd parity needs an odd total → P = 1 → 1 1000111</div>",
"id": 107
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.32",
"q": "Which bit has to be complemented to change an ASCII letter from uppercase to lowercase?",
"opts": [
"The bit with weight 32 (bit 5, 6th from the right)",
"The MSB (bit 6, weight 64)",
"The LSB",
"The bit with weight 16",
"The parity bit"
],
"a": 0,
"sol": "<div class='steps'>'A' = 100 0001 (65)\n'a' = 110 0001 (97)   difference = 32 = 2⁵</div>",
"id": 108
},
{
"t": "in",
"lv": 5,
"src": "Book 1.34",
"q": "Write the ASCII digit '7' as 8 bits with an <b>even</b> parity bit in the MSB.",
"acc": [
"10110111"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>'7' = 011 0111 (hex 37) → five 1s (odd)\neven parity → P = 1 → 1 011 0111</div>",
"id": 109
},
{
"t": "mcq",
"lv": 5,
"src": "Slides p.59",
"q": "A single parity bit can:",
"opts": [
"Detect any odd number of bit errors, but not correct them",
"Detect and correct single-bit errors",
"Detect all errors",
"Detect 2-bit errors",
"Correct any odd number of errors"
],
"a": 0,
"sol": "If 2 bits flip, the count of 1s keeps the same parity and the error goes unnoticed. If 1 or 3 bits flip, the parity check fails. The parity bit doesn't say <b>which</b> bit flipped, so nothing can be corrected.",
"id": 110
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.22",
"q": "The digit '1' as ASCII with an <b>even</b> parity bit in the MSB is:",
"opts": [
"10110001",
"00110001",
"00000001",
"10000001",
"01100011"
],
"a": 0,
"sol": "<div class='steps'>'1' = 011 0001 → three 1s (odd)\neven parity → P = 1 → 1011 0001</div>",
"id": 111
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.35",
"q": "f = (abc)' (3-input NAND). For abc = 000, 001, …, 111, f is:",
"opts": [
"1 1 1 1 1 1 1 0",
"0 0 0 0 0 0 0 1",
"1 0 0 0 0 0 0 0",
"0 1 1 1 1 1 1 1",
"1 1 1 1 1 1 1 1"
],
"a": 0,
"sol": "NAND is 0 <b>only</b> when all inputs are 1, which happens only at abc = 111. The companion g = (a+b+c)' (NOR) is 1 0 0 0 0 0 0 0.",
"id": 112
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.36",
"q": "g = (a ⊕ b)' (XNOR). For ab = 00, 01, 10, 11, g is:",
"opts": [
"1 0 0 1",
"0 1 1 0",
"1 1 1 0",
"0 0 0 1",
"1 0 1 0"
],
"a": 0,
"sol": "XNOR is 1 when the inputs are <b>equal</b> (00 and 11). The companion f = a ⊕ b is 0 1 1 0.",
"id": 113
},
{
"t": "mcq",
"lv": 5,
"src": "Slides p.62",
"q": "Logic levels are defined as voltage <b>ranges</b> rather than exact values because:",
"opts": [
"Ranges make the circuit tolerant of noise",
"It saves power",
"It allows three logic values",
"It makes gates faster",
"It's needed for ASCII"
],
"a": 0,
"sol": "A signal anywhere in the high range reads as 1 and anywhere in the low range reads as 0. Small noise doesn't change the logic value. Between the ranges is the transition region.",
"id": 114
},
{
"t": "mcq",
"lv": 5,
"src": "Slides p.63",
"q": "Two switches in <b>series</b> controlling a lamp implement:",
"opts": [
"AND",
"OR",
"NOT",
"XOR",
"NAND"
],
"a": 0,
"sol": "Current flows only if switch A <b>and</b> switch B are closed. Switches in parallel implement OR.",
"id": 115
},
{
"t": "mcq",
"lv": 5,
"src": "Book 1.31",
"q": "How many printing characters (graphic + space) are there in 7-bit ASCII?",
"opts": [
"95",
"128",
"94",
"96",
"33"
],
"a": 0,
"sol": "<div class='steps'>128 codes − 33 control codes (0–31 and DEL 127) = 95 printing characters\n95 = 94 graphic + space;  specials = 94 − 26 − 26 − 10 = 32</div>",
"id": 116
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "For which base r is (14)<sub>r</sub> × (3)<sub>r</sub> = (52)<sub>r</sub> true?",
"opts": [
"No valid base exists",
"5",
"6",
"7",
"8"
],
"a": 0,
"sol": "<div class='steps'>(r + 4) · 3 = 5r + 2\n3r + 12 = 5r + 2  →  r = 5</div><p>But (52)<sub>r</sub> contains the digit 5, and base 5 only allows 0–4. So r = 5 is <b>invalid</b> and no base works. The algebra alone would have fooled you.</p>",
"id": 117
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "How many hexadecimal digits does 2<sup>100</sup> have?",
"opts": [
"26",
"25",
"100",
"31",
"24"
],
"a": 0,
"sol": "<div class='steps'>2¹⁰⁰ = (2⁴)²⁵ = 16²⁵\n16²⁵ in hex is 1 followed by 25 zeros → 26 digits</div>",
"id": 118
},
{
"t": "in",
"lv": 6,
"src": "GOAT",
"q": "Find r such that (3)<sub>r</sub> × (4)<sub>r</sub> = (13)<sub>r</sub>.",
"acc": [
"9"
],
"num": true,
"lz": false,
"hint": "",
"sol": "<div class='steps'>3 × 4 = 12 = (13)r = r + 3 → r = 9\ndigits 3, 4, 1 are all &lt; 9 ✓</div>",
"id": 119
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "In 8-bit 2's complement, what happens when you negate (take the 2's complement of) −128?",
"opts": [
"You get 10000000 = −128 again (overflow)",
"You get +128",
"You get 01111111 = +127",
"You get 00000000",
"You get 11111111 = −1"
],
"a": 0,
"sol": "<div class='steps'>−128 = 10000000 → 1's comp 01111111 → +1 → 10000000\n+128 would need 9 bits, so the result overflows back to −128</div>",
"id": 120
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "(FFFF)<sub>16</sub> stored in 16 bits is ___ in 2's complement and ___ in 1's complement:",
"opts": [
"−1 and −0",
"−1 and −1",
"−0 and −1",
"65535 and −1",
"−32767 and −0"
],
"a": 0,
"sol": "<div class='steps'>2's: flip + 1 → 0000 … 0001 → −1\n1's: flip → 0000 … 0000 → −0 (the negative zero)</div>",
"id": 121
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "Which of these is <b>not</b> a valid 2-digit BCD number?",
"opts": [
"0101 1010",
"1001 1001",
"0000 0000",
"1000 0111",
"0011 0000"
],
"a": 0,
"sol": "1010 = 10 is one of the invalid BCD codes (1010–1111). Each 4-bit group has to be 0000–1001.",
"id": 122
},
{
"t": "in",
"lv": 6,
"src": "GOAT",
"q": "Add 59 + 38 in BCD. Give the 8-bit BCD result.",
"acc": [
"10010111"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>  0101 1001   (59)\n+ 0011 1000   (38)\nunits: 1001 + 1000 = 1 0001 → carry out → +0110 → 1 0111 → 7, carry 1\ntens:  0101 + 0011 + 1 = 1001 = 9 ✓\n→ 1001 0111 = 97</div><div class='trap'>The units sum 0001 looks valid, but there was a carry out of 4 bits (17 ≥ 16), so it still needs +6.</div>",
"id": 123
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "Two 8-bit 2's complement numbers: 01110000 + 01010000. The result and its status:",
"opts": [
"11000000, overflow (the true sum 192 doesn't fit)",
"11000000 = −64, correct",
"00100000, carry ignored, correct",
"11000000 = 192, correct",
"1 11000000, carry means overflow"
],
"a": 0,
"sol": "<div class='steps'>01110000 = +112, 01010000 = +80 → true sum 192 &gt; 127\n01110000 + 01010000 = 11000000 (sign bit 1 → reads as −64)\npositive + positive → negative ⇒ OVERFLOW\ncarry into the MSB = 1, carry out = 0 → they differ ⇒ overflow</div>",
"id": 124
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "Which 3-bit sequence is a valid Gray code cycle?",
"opts": [
"000, 001, 011, 010, 110, 111, 101, 100",
"000, 001, 010, 011, 100, 101, 110, 111",
"000, 011, 001, 010, 110, 111, 101, 100",
"000, 001, 011, 111, 110, 010, 101, 100",
"000, 001, 011, 010, 110, 100, 101, 111"
],
"a": 0,
"sol": "Check that every step (including the wrap from last back to first) changes exactly one bit:<div class='steps'>000→001→011→010→110→111→101→100→(000) ✓\nthe binary sequence changes 2–3 bits at 011→100\noption 3: 000→011 changes 2 bits ✗</div>",
"id": 125
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "0.2 is converted to binary and truncated to 8 bits after the point: 0.00110011. Its decimal value is:",
"opts": [
"0.19921875",
"0.2",
"0.1875",
"0.203125",
"0.25"
],
"a": 0,
"sol": "<table><tr><th>Fraction × 2</th><th>Result</th><th>Integer → digit</th></tr><tr><td>0.2 × 2</td><td>0.4</td><td>0 (a<sub>-1</sub>)</td></tr><tr><td>0.4 × 2</td><td>0.8</td><td>0 (a<sub>-2</sub>)</td></tr><tr><td>0.8 × 2</td><td>1.6</td><td>1 (a<sub>-3</sub>)</td></tr><tr><td>0.6 × 2</td><td>1.2</td><td>1 (a<sub>-4</sub>)</td></tr><tr><td>0.2 × 2</td><td>0.4</td><td>0 (a<sub>-5</sub>)</td></tr><tr><td>0.4 × 2</td><td>0.8</td><td>0 (a<sub>-6</sub>)</td></tr><tr><td>0.8 × 2</td><td>1.6</td><td>1 (a<sub>-7</sub>)</td></tr><tr><td>0.6 × 2</td><td>1.2</td><td>1 (a<sub>-8</sub>)</td></tr></table><p>Read integer parts <b>top → bottom</b> (first = MSB after the point): <b>(0.00110011…)<sub>2</sub></b></p><div class='steps'>0.00110011 = 1/8 + 1/16 + 1/128 + 1/256 = 51/256 = 0.19921875</div>",
"id": 126
},
{
"t": "in",
"lv": 6,
"src": "GOAT",
"q": "'a' is 61h in ASCII. What is 'k' in hex?",
"acc": [
"6B"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>'k' is the 11th letter → 'a' + 10 = 61h + Ah = 6Bh</div>",
"id": 127
},
{
"t": "in",
"lv": 6,
"src": "GOAT",
"q": "Encode the string \"Hi\" in 8-bit ASCII with <b>odd</b> parity in the MSB. Write it as 2 hex bytes (e.g. 12 34).",
"acc": [
"C8E9"
],
"num": false,
"lz": false,
"hint": "",
"sol": "<div class='steps'>'H' = 48h = 100 1000 → two 1s (even) → P = 1 → 1100 1000 = C8\n'i' = 69h = 110 1001 → four 1s (even) → P = 1 → 1110 1001 = E9\n→ C8 E9</div>",
"id": 128
},
{
"t": "mcq",
"lv": 6,
"src": "Book 1.30",
"q": "Decode 73 F4 E5 76 E5 4A EF 62 73 (MSB = parity). Which parity?",
"opts": [
"\"steveJobs\", odd parity",
"\"steveJobs\", even parity",
"\"Steve Jobs\", odd parity",
"\"stEvEJobs\", odd parity",
"\"steveJobs\", no consistent parity"
],
"a": 0,
"sol": "<div class='steps'>mask off the MSB: 73 74 65 76 65 4A 6F 62 73 → s t e v e J o b s\n1s count: 73=5 F4=5 E5=5 76=5 E5=5 4A=3 EF=7 62=3 73=5 → all odd → ODD</div>",
"id": 129
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "Which decimal code is <b>not</b> self-complementing?",
"opts": [
"BCD (8421)",
"Excess-3",
"2421",
"84-2-1",
"All of them are self-complementing"
],
"a": 0,
"sol": "<div class='steps'>BCD: 2 = 0010 → flip = 1101 (invalid), but 9−2 = 7 = 0111 ✗\nExcess-3, 2421 and 84-2-1 all satisfy code(9−d) = 1's comp of code(d)</div>",
"id": 130
},
{
"t": "mcq",
"lv": 6,
"src": "Slides p.46",
"q": "Using signed magnitude, 0011 (+3) + 1011 (−3) added like plain binary gives 1110. This shows that:",
"opts": [
"Signed magnitude can't add the sign bit like a normal bit; 1110 = −6 is wrong",
"Signed magnitude addition works fine; +3 − 3 = −6",
"1110 is −0 in signed magnitude",
"The answer must be complemented to get 0",
"There is an overflow because 3 + 3 &gt; 7"
],
"a": 0,
"sol": "In signed magnitude the sign and magnitude have to be handled separately (compare the magnitudes, subtract, choose the sign). That's why computers use 2's complement: 0011 + 1101 = 1 0000 → 0000 = 0 ✓",
"id": 131
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "In 6-bit 2's complement, A = 101101 and B = 110011. A − B = ?",
"opts": [
"111010 (−6)",
"000110 (+6)",
"011010 (+26)",
"111010 (+58)",
"100000 (−32)"
],
"a": 0,
"sol": "<div class='steps'>A = −32 + 8 + 4 + 1 = −19\nB = −32 + 16 + 2 + 1 = −13\nA − B = A + (2's comp of B) = 101101 + 001101 = 111010\n111010 = −32 + 16 + 8 + 2 = −6  ✓ (−19 − (−13) = −6)</div>",
"id": 132
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "What is the minimum number of bits needed to represent −129 in 2's complement?",
"opts": [
"9",
"8",
"10",
"7",
"16"
],
"a": 0,
"sol": "<div class='steps'>8 bits: range −128 … +127 → −129 doesn't fit\n9 bits: range −256 … +255 → fits (1 0111 1111)</div>",
"id": 133
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "How many of the 256 8-bit patterns are valid 2-digit BCD numbers?",
"opts": [
"100",
"256",
"160",
"99",
"64"
],
"a": 0,
"sol": "<div class='steps'>each nibble has 10 valid codes (0000–1001)\n10 × 10 = 100 valid patterns (00 … 99)\n156 patterns are wasted, which is BCD's inefficiency</div>",
"id": 134
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "(0.1)<sub>8</sub> equals:",
"opts": [
"(0.001)<sub>2</sub> = (0.125)<sub>10</sub>",
"(0.1)<sub>2</sub> = (0.5)<sub>10</sub>",
"(0.001)<sub>2</sub> = (0.1)<sub>10</sub>",
"(0.100)<sub>2</sub> = (0.125)<sub>10</sub>",
"(0.0001)<sub>2</sub> = (0.0625)<sub>10</sub>"
],
"a": 0,
"sol": "<div class='steps'>octal 1 → 3 bits 001 → (0.001)2\n= 1/8 = 0.125</div>",
"id": 135
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "Convert (10110.0101)<sub>2</sub> to hex, octal and decimal. Which line is correct?",
"opts": [
"(16.5)<sub>16</sub> = (26.24)<sub>8</sub> = 22.3125",
"(16.5)<sub>16</sub> = (26.22)<sub>8</sub> = 22.3125",
"(B0.5)<sub>16</sub> = (26.24)<sub>8</sub> = 22.3125",
"(16.A)<sub>16</sub> = (26.24)<sub>8</sub> = 22.625",
"(16.5)<sub>16</sub> = (54.24)<sub>8</sub> = 22.3125"
],
"a": 0,
"sol": "<div class='steps'>hex:   0001 0110 . 0101        → 16.5\noctal: 010 110 . 010 100        → 26.24\ndec:   16 + 4 + 2 + 1/4 + 1/16 → 22.3125</div>",
"id": 136
},
{
"t": "mcq",
"lv": 6,
"src": "GOAT",
"q": "A system must encode 1000 distinct items in binary, and then a parity bit is added. How many bits per code word?",
"opts": [
"11",
"10",
"4",
"12",
"9"
],
"a": 0,
"sol": "<div class='steps'>⌈log₂ 1000⌉ = 10 (2⁹ = 512 &lt; 1000 ≤ 1024 = 2¹⁰)\n+1 parity bit → 11 bits</div>",
"id": 137
}
];
