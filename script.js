// Word database with simple words categorized by difficulty
const wordDatabase = {
    easy: [
        { word: 'cat', emoji: '🐱', options: ['cat', 'cap', 'can', 'cab'] },
        { word: 'dog', emoji: '🐕', options: ['dog', 'doll', 'dot', 'dock'] },
        { word: 'sun', emoji: '☀️', options: ['sun', 'son', 'sung', 'sum'] },
        { word: 'hat', emoji: '🎩', options: ['hat', 'ham', 'had', 'has'] },
        { word: 'bat', emoji: '🦇', options: ['bat', 'bad', 'bag', 'ban'] },
        { word: 'car', emoji: '🚗', options: ['car', 'call', 'cart', 'card'] },
        { word: 'bed', emoji: '🛏️', options: ['bed', 'bell', 'bet', 'ben'] },
        { word: 'cup', emoji: '☕', options: ['cup', 'cub', 'cut', 'cuff'] },
        { word: 'pen', emoji: '🖊️', options: ['pen', 'pet', 'peg', 'peck'] },
        { word: 'pig', emoji: '🐷', options: ['pig', 'pin', 'pit', 'pick'] },
        { word: 'bee', emoji: '🐝', options: ['bee', 'bed', 'beg', 'bet'] },
        { word: 'fox', emoji: '🦊', options: ['fox', 'fix', 'box', 'fax'] },
        { word: 'ant', emoji: '🐜', options: ['ant', 'and', 'aunt', 'art'] },
        { word: 'bus', emoji: '🚌', options: ['bus', 'bug', 'but', 'bun'] },
        { word: 'egg', emoji: '🥚', options: ['egg', 'end', 'eat', 'ear'] },
        { word: 'owl', emoji: '🦉', options: ['owl', 'oil', 'old', 'our'] },
        { word: 'box', emoji: '📦', options: ['box', 'boy', 'bow', 'bot'] },
        { word: 'bag', emoji: '👜', options: ['bag', 'bat', 'bad', 'ban'] },
        { word: 'key', emoji: '🔑', options: ['key', 'kit', 'kid', 'keg'] },
        { word: 'fan', emoji: '🪭', options: ['fan', 'fun', 'fin', 'fawn'] }
    ],
    medium: [
        { word: 'fish', emoji: '🐟', options: ['fish', 'fist', 'fix', 'fit'] },
        { word: 'star', emoji: '⭐', options: ['star', 'start', 'stare', 'stark'] },
        { word: 'ball', emoji: '⚽', options: ['ball', 'bald', 'balm', 'bawl'] },
        { word: 'tree', emoji: '🌳', options: ['tree', 'treat', 'tread', 'trek'] },
        { word: 'book', emoji: '📚', options: ['book', 'boom', 'boot', 'boon'] },
        { word: 'bird', emoji: '🐦', options: ['bird', 'birth', 'birch', 'burn'] },
        { word: 'frog', emoji: '🐸', options: ['frog', 'frost', 'front', 'frock'] },
        { word: 'moon', emoji: '🌙', options: ['moon', 'mood', 'moot', 'moose'] },
        { word: 'duck', emoji: '🦆', options: ['duck', 'dunk', 'dust', 'dusk'] },
        { word: 'ship', emoji: '🚢', options: ['ship', 'shin', 'shift', 'shim'] },
        { word: 'tiger', emoji: '🐯', options: ['tiger', 'tinger', 'tigar', 'tyger'] },
        { word: 'apple', emoji: '🍎', options: ['apple', 'aple', 'appel', 'aplle'] },
        { word: 'cloud', emoji: '☁️', options: ['cloud', 'clowd', 'claud', 'cloude'] },
        { word: 'train', emoji: '🚂', options: ['train', 'trane', 'trayn', 'trian'] },
        { word: 'plant', emoji: '🌱', options: ['plant', 'plent', 'plaint', 'planat'] },
        { word: 'smile', emoji: '😄', options: ['smile', 'smyle', 'smail', 'smiel'] },
        { word: 'beach', emoji: '🏖️', options: ['beach', 'beech', 'beatch', 'beache'] },
        { word: 'horse', emoji: '🐴', options: ['horse', 'hourse', 'horce', 'hoarse'] },
        { word: 'light', emoji: '💡', options: ['light', 'lite', 'lyte', 'lighte'] },
        { word: 'water', emoji: '💧', options: ['water', 'watter', 'watr', 'watar'] }
    ],
    hard: [
        { word: 'house', emoji: '🏠', options: ['house', 'hound', 'howl', 'hoist'] },
        { word: 'apple', emoji: '🍎', options: ['apple', 'ample', 'ankle', 'angle'] },
        { word: 'flower', emoji: '🌸', options: ['flower', 'flounder', 'flour', 'flown'] },
        { word: 'happy', emoji: '😊', options: ['happy', 'harpy', 'hasty', 'handy'] },
        { word: 'train', emoji: '🚂', options: ['train', 'trait', 'trace', 'trade'] },
        { word: 'school', emoji: '🏫', options: ['school', 'scoop', 'scoot', 'scout'] },
        { word: 'water', emoji: '💧', options: ['water', 'wader', 'wafer', 'waver'] },
        { word: 'rabbit', emoji: '🐰', options: ['rabbit', 'rabid', 'rapid', 'raffle'] },
        { word: 'chair', emoji: '🪑', options: ['chair', 'charm', 'charge', 'chart'] },
        { word: 'smile', emoji: '😄', options: ['smile', 'smite', 'smell', 'smoke'] },
        { word: 'elephant', emoji: '🐘', options: ['elephant', 'elegant', 'element', 'elevate'] },
        { word: 'mountain', emoji: '⛰️', options: ['mountain', 'maintain', 'fountain', 'mournful'] },
        { word: 'chocolate', emoji: '🍫', options: ['chocolate', 'chronicle', 'cholera', 'chuckle'] },
        { word: 'butterfly', emoji: '🦋', options: ['butterfly', 'buttery', 'battery', 'bitterly'] },
        { word: 'treasure', emoji: '💎', options: ['treasure', 'measure', 'pleasure', 'leisure'] },
        { word: 'adventure', emoji: '🗺️', options: ['adventure', 'advertise', 'advance', 'advantage'] },
        { word: 'dinosaur', emoji: '🦕', options: ['dinosaur', 'discover', 'discourse', 'disorder'] },
        { word: 'Saturday', emoji: '📅', options: ['Saturday', 'salutary', 'sanitary', 'sanctuary'] },
        { word: 'beautiful', emoji: '✨', options: ['beautiful', 'bountiful', 'dutiful', 'peaceful'] },
        { word: 'library', emoji: '📚', options: ['library', 'liberty', 'literary', 'litany'] }
    ]
};

// Sentence database for sentence mode
const sentenceDatabase = {
    easy: [
        { sentence: 'I see a cat', emoji: '🐱', words: ['I', 'see', 'a', 'cat'] },
        { sentence: 'The dog runs', emoji: '🐕', words: ['The', 'dog', 'runs'] },
        { sentence: 'I like my bed', emoji: '🛏️', words: ['I', 'like', 'my', 'bed'] },
        { sentence: 'The sun is hot', emoji: '☀️', words: ['The', 'sun', 'is', 'hot'] },
        { sentence: 'I have a hat', emoji: '🎩', words: ['I', 'have', 'a', 'hat'] }
    ],
    medium: [
        { sentence: 'The fish swims fast', emoji: '🐟', words: ['The', 'fish', 'swims', 'fast'] },
        { sentence: 'I can see a star', emoji: '⭐', words: ['I', 'can', 'see', 'a', 'star'] },
        { sentence: 'The bird can fly high', emoji: '🐦', words: ['The', 'bird', 'can', 'fly', 'high'] },
        { sentence: 'I read a good book', emoji: '📚', words: ['I', 'read', 'a', 'good', 'book'] },
        { sentence: 'The moon shines bright', emoji: '🌙', words: ['The', 'moon', 'shines', 'bright'] }
    ],
    hard: [
        { sentence: 'I live in a big house', emoji: '🏠', words: ['I', 'live', 'in', 'a', 'big', 'house'] },
        { sentence: 'The red apple tastes sweet', emoji: '🍎', words: ['The', 'red', 'apple', 'tastes', 'sweet'] },
        { sentence: 'My happy rabbit hops around', emoji: '🐰', words: ['My', 'happy', 'rabbit', 'hops', 'around'] },
        { sentence: 'The train goes very fast', emoji: '🚂', words: ['The', 'train', 'goes', 'very', 'fast'] },
        { sentence: 'I see a beautiful flower', emoji: '🌸', words: ['I', 'see', 'a', 'beautiful', 'flower'] }
    ]
};

// Reading comprehension sentences with questions
const readingSentences = {
    easy: [
        { sentence: 'The cat is on the mat.', emoji: '🐱', question: 'Where is the cat?', options: ['on the mat', 'in the box', 'under the bed', 'by the door'] },
        { sentence: 'The dog likes to run.', emoji: '🐕', question: 'What does the dog like to do?', options: ['run', 'sleep', 'eat', 'sit'] },
        { sentence: 'I have a red ball.', emoji: '⚽', question: 'What color is the ball?', options: ['red', 'blue', 'green', 'yellow'] },
        { sentence: 'The sun is very hot.', emoji: '☀️', question: 'How is the sun?', options: ['hot', 'cold', 'warm', 'cool'] },
        { sentence: 'My bed is soft.', emoji: '🛏️', question: 'How is the bed?', options: ['soft', 'hard', 'big', 'small'] }
    ],
    medium: [
        { sentence: 'The blue bird flies in the sky.', emoji: '🐦', question: 'What color is the bird?', options: ['blue', 'red', 'yellow', 'green'] },
        { sentence: 'I read my book every night.', emoji: '📚', question: 'When do I read?', options: ['every night', 'in the morning', 'after lunch', 'on Sunday'] },
        { sentence: 'The fish swims in the water.', emoji: '🐟', question: 'Where does the fish swim?', options: ['in the water', 'on land', 'in the air', 'in a tree'] },
        { sentence: 'My mom makes good cookies.', emoji: '🍪', question: 'Who makes cookies?', options: ['my mom', 'my dad', 'my friend', 'my teacher'] },
        { sentence: 'The train goes to the city.', emoji: '🚂', question: 'Where does the train go?', options: ['to the city', 'to the park', 'to school', 'to the beach'] }
    ],
    hard: [
        { sentence: 'The happy children play in the park every afternoon.', emoji: '🏞️', question: 'When do the children play?', options: ['every afternoon', 'in the morning', 'at night', 'on weekends'] },
        { sentence: 'My teacher reads interesting stories to our class.', emoji: '👩‍🏫', question: 'What does the teacher read?', options: ['interesting stories', 'math problems', 'science books', 'the news'] },
        { sentence: 'The beautiful flowers grow in the garden during spring.', emoji: '🌸', question: 'Where do the flowers grow?', options: ['in the garden', 'in the house', 'in the forest', 'in the water'] },
        { sentence: 'We eat breakfast together before going to school.', emoji: '🍳', question: 'When do we eat breakfast?', options: ['before going to school', 'after school', 'at lunchtime', 'in the evening'] },
        { sentence: 'The small rabbit hops quickly across the field.', emoji: '🐰', question: 'How does the rabbit move?', options: ['hops quickly', 'walks slowly', 'runs fast', 'jumps high'] }
    ]
};

// Rhyming words database
const rhymingDatabase = {
    easy: [
        { word: 'cat', emoji: '🐱', rhymes: ['hat', 'bat', 'mat', 'rat'], nonRhymes: ['dog', 'pig', 'cup', 'pen'] },
        { word: 'dog', emoji: '🐕', rhymes: ['log', 'fog', 'hog', 'jog'], nonRhymes: ['cat', 'sun', 'bed', 'car'] },
        { word: 'sun', emoji: '☀️', rhymes: ['run', 'fun', 'bun', 'gun'], nonRhymes: ['moon', 'star', 'hat', 'dog'] },
        { word: 'bed', emoji: '🛏️', rhymes: ['red', 'led', 'fed', 'shed'], nonRhymes: ['bat', 'cup', 'pen', 'car'] },
        { word: 'car', emoji: '🚗', rhymes: ['far', 'bar', 'jar', 'star'], nonRhymes: ['bus', 'cat', 'dog', 'sun'] },
        { word: 'box', emoji: '📦', rhymes: ['fox', 'sox', 'locks', 'rocks'], nonRhymes: ['bag', 'cup', 'hat', 'pen'] },
        { word: 'fish', emoji: '🐟', rhymes: ['dish', 'wish', 'swish'], nonRhymes: ['bird', 'frog', 'duck', 'bear'] },
        { word: 'duck', emoji: '🦆', rhymes: ['luck', 'truck', 'stuck', 'buck'], nonRhymes: ['bird', 'fish', 'frog', 'bear'] }
    ],
    medium: [
        { word: 'tree', emoji: '🌳', rhymes: ['bee', 'sea', 'free', 'knee'], nonRhymes: ['leaf', 'bird', 'nest', 'wood'] },
        { word: 'moon', emoji: '🌙', rhymes: ['soon', 'spoon', 'noon', 'tune'], nonRhymes: ['star', 'night', 'dark', 'light'] },
        { word: 'bear', emoji: '🐻', rhymes: ['care', 'hair', 'fair', 'share'], nonRhymes: ['lion', 'tiger', 'wolf', 'deer'] },
        { word: 'book', emoji: '📚', rhymes: ['look', 'cook', 'took', 'hook'], nonRhymes: ['read', 'page', 'word', 'desk'] },
        { word: 'light', emoji: '💡', rhymes: ['night', 'bright', 'sight', 'right'], nonRhymes: ['dark', 'lamp', 'glow', 'shine'] },
        { word: 'rain', emoji: '🌧️', rhymes: ['train', 'pain', 'main', 'chain'], nonRhymes: ['cloud', 'storm', 'wind', 'snow'] },
        { word: 'snake', emoji: '🐍', rhymes: ['cake', 'lake', 'make', 'bake'], nonRhymes: ['frog', 'lizard', 'worm', 'spider'] },
        { word: 'night', emoji: '🌃', rhymes: ['light', 'might', 'fight', 'tight'], nonRhymes: ['day', 'moon', 'dark', 'sleep'] }
    ],
    hard: [
        { word: 'flower', emoji: '🌸', rhymes: ['power', 'tower', 'shower', 'hour'], nonRhymes: ['garden', 'petal', 'stem', 'bloom'] },
        { word: 'castle', emoji: '🏰', rhymes: ['hassle', 'tassel', 'vassal'], nonRhymes: ['palace', 'tower', 'knight', 'king'] },
        { word: 'mountain', emoji: '⛰️', rhymes: ['fountain'], nonRhymes: ['valley', 'hill', 'peak', 'cliff'] },
        { word: 'thunder', emoji: '⚡', rhymes: ['under', 'wonder', 'plunder'], nonRhymes: ['lightning', 'storm', 'rain', 'cloud'] },
        { word: 'treasure', emoji: '💎', rhymes: ['measure', 'pleasure', 'leisure'], nonRhymes: ['gold', 'jewel', 'coin', 'chest'] },
        { word: 'monkey', emoji: '🐵', rhymes: ['donkey', 'funky'], nonRhymes: ['gorilla', 'chimp', 'ape', 'banana'] },
        { word: 'kitten', emoji: '🐈', rhymes: ['mitten', 'written', 'bitten'], nonRhymes: ['puppy', 'rabbit', 'hamster', 'mouse'] },
        { word: 'dragon', emoji: '🐉', rhymes: ['wagon', 'flagon'], nonRhymes: ['knight', 'fire', 'wings', 'castle'] }
    ]
};

// Digraphs database - two letters that make one sound
const digraphsDatabase = {
    easy: [
        { word: 'fish', emoji: '🐟', digraph: 'sh', position: 'end', allLetters: ['f', 'i', 'sh'], otherDigraphs: ['ch', 'th', 'wh'] },
        { word: 'ship', emoji: '🚢', digraph: 'sh', position: 'start', allLetters: ['sh', 'i', 'p'], otherDigraphs: ['ch', 'th', 'wh'] },
        { word: 'wish', emoji: '⭐', digraph: 'sh', position: 'end', allLetters: ['w', 'i', 'sh'], otherDigraphs: ['ch', 'th', 'ck'] },
        { word: 'shop', emoji: '🏪', digraph: 'sh', position: 'start', allLetters: ['sh', 'o', 'p'], otherDigraphs: ['ch', 'th', 'wh'] },
        
        { word: 'chair', emoji: '🪑', digraph: 'ch', position: 'start', allLetters: ['ch', 'air'], otherDigraphs: ['sh', 'th', 'wh'] },
        { word: 'beach', emoji: '🏖️', digraph: 'ch', position: 'end', allLetters: ['b', 'ea', 'ch'], otherDigraphs: ['sh', 'th', 'ck'] },
        { word: 'chip', emoji: '🍟', digraph: 'ch', position: 'start', allLetters: ['ch', 'i', 'p'], otherDigraphs: ['sh', 'th', 'wh'] },
        { word: 'lunch', emoji: '🍱', digraph: 'ch', position: 'end', allLetters: ['l', 'u', 'n', 'ch'], otherDigraphs: ['sh', 'th', 'ck'] },
        
        { word: 'bath', emoji: '🛁', digraph: 'th', position: 'end', allLetters: ['b', 'a', 'th'], otherDigraphs: ['sh', 'ch', 'ck'] },
        { word: 'think', emoji: '🤔', digraph: 'th', position: 'start', allLetters: ['th', 'i', 'n', 'k'], otherDigraphs: ['sh', 'ch', 'wh'] },
        { word: 'teeth', emoji: '🦷', digraph: 'th', position: 'end', allLetters: ['t', 'ee', 'th'], otherDigraphs: ['sh', 'ch', 'ck'] },
        { word: 'thumb', emoji: '👍', digraph: 'th', position: 'start', allLetters: ['th', 'u', 'm', 'b'], otherDigraphs: ['sh', 'ch', 'wh'] },
        
        { word: 'duck', emoji: '🦆', digraph: 'ck', position: 'end', allLetters: ['d', 'u', 'ck'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'rock', emoji: '🪨', digraph: 'ck', position: 'end', allLetters: ['r', 'o', 'ck'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'clock', emoji: '🕐', digraph: 'ck', position: 'end', allLetters: ['c', 'l', 'o', 'ck'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'black', emoji: '⬛', digraph: 'ck', position: 'end', allLetters: ['b', 'l', 'a', 'ck'], otherDigraphs: ['sh', 'ch', 'th'] }
    ],
    medium: [
        { word: 'whale', emoji: '🐋', digraph: 'wh', position: 'start', allLetters: ['wh', 'a', 'l', 'e'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'white', emoji: '⚪', digraph: 'wh', position: 'start', allLetters: ['wh', 'i', 't', 'e'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'wheel', emoji: '⚙️', digraph: 'wh', position: 'start', allLetters: ['wh', 'ee', 'l'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'whisper', emoji: '🤫', digraph: 'wh', position: 'start', allLetters: ['wh', 'i', 's', 'p', 'er'], otherDigraphs: ['sh', 'ch', 'th'] },
        
        { word: 'phone', emoji: '📱', digraph: 'ph', position: 'start', allLetters: ['ph', 'o', 'n', 'e'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'graph', emoji: '📊', digraph: 'ph', position: 'end', allLetters: ['g', 'r', 'a', 'ph'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'photo', emoji: '📷', digraph: 'ph', position: 'start', allLetters: ['ph', 'o', 't', 'o'], otherDigraphs: ['sh', 'ch', 'th'] },
        
        { word: 'ring', emoji: '💍', digraph: 'ng', position: 'end', allLetters: ['r', 'i', 'ng'], otherDigraphs: ['sh', 'ch', 'ck'] },
        { word: 'sing', emoji: '🎤', digraph: 'ng', position: 'end', allLetters: ['s', 'i', 'ng'], otherDigraphs: ['sh', 'ch', 'ck'] },
        { word: 'king', emoji: '🤴', digraph: 'ng', position: 'end', allLetters: ['k', 'i', 'ng'], otherDigraphs: ['sh', 'ch', 'ck'] },
        { word: 'strong', emoji: '💪', digraph: 'ng', position: 'end', allLetters: ['s', 't', 'r', 'o', 'ng'], otherDigraphs: ['sh', 'ch', 'ck'] },
        
        { word: 'brush', emoji: '🖌️', digraph: 'sh', position: 'end', allLetters: ['b', 'r', 'u', 'sh'], otherDigraphs: ['ch', 'th', 'ck'] },
        { word: 'trash', emoji: '🗑️', digraph: 'sh', position: 'end', allLetters: ['t', 'r', 'a', 'sh'], otherDigraphs: ['ch', 'th', 'ck'] },
        { word: 'sheep', emoji: '🐑', digraph: 'sh', position: 'start', allLetters: ['sh', 'ee', 'p'], otherDigraphs: ['ch', 'th', 'wh'] },
        
        { word: 'teacher', emoji: '👨‍🏫', digraph: 'ch', position: 'middle', allLetters: ['t', 'ea', 'ch', 'er'], otherDigraphs: ['sh', 'th', 'ck'] },
        { word: 'chicken', emoji: '🐔', digraph: 'ch', position: 'start', allLetters: ['ch', 'i', 'ck', 'en'], otherDigraphs: ['sh', 'th', 'wh'] },
        { word: 'cheese', emoji: '🧀', digraph: 'ch', position: 'start', allLetters: ['ch', 'ee', 's', 'e'], otherDigraphs: ['sh', 'th', 'wh'] }
    ],
    hard: [
        { word: 'dolphin', emoji: '🐬', digraph: 'ph', position: 'middle', allLetters: ['d', 'o', 'l', 'ph', 'in'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'elephant', emoji: '🐘', digraph: 'ph', position: 'middle', allLetters: ['e', 'l', 'e', 'ph', 'ant'], otherDigraphs: ['sh', 'ch', 'th'] },
        { word: 'alphabet', emoji: '🔤', digraph: 'ph', position: 'middle', allLetters: ['a', 'l', 'ph', 'a', 'b', 'et'], otherDigraphs: ['sh', 'ch', 'th'] },
        
        { word: 'birthday', emoji: '🎂', digraph: 'th', position: 'middle', allLetters: ['b', 'ir', 'th', 'd', 'ay'], otherDigraphs: ['sh', 'ch', 'ph'] },
        { word: 'something', emoji: '💭', digraph: 'th', position: 'middle', allLetters: ['s', 'o', 'm', 'e', 'th', 'ing'], otherDigraphs: ['sh', 'ch', 'ng'] },
        { word: 'weather', emoji: '🌤️', digraph: 'th', position: 'middle', allLetters: ['w', 'ea', 'th', 'er'], otherDigraphs: ['sh', 'ch', 'wh'] },
        
        { word: 'mushroom', emoji: '🍄', digraph: 'sh', position: 'middle', allLetters: ['m', 'u', 'sh', 'r', 'oo', 'm'], otherDigraphs: ['ch', 'th', 'ph'] },
        { word: 'sunshine', emoji: '☀️', digraph: 'sh', position: 'middle', allLetters: ['s', 'u', 'n', 'sh', 'ine'], otherDigraphs: ['ch', 'th', 'ph'] },
        
        { word: 'watching', emoji: '👀', digraph: 'ch', position: 'middle', allLetters: ['w', 'a', 't', 'ch', 'ing'], otherDigraphs: ['sh', 'th', 'ng'] },
        { word: 'kitchen', emoji: '🍳', digraph: 'ch', position: 'middle', allLetters: ['k', 'i', 't', 'ch', 'en'], otherDigraphs: ['sh', 'th', 'ck'] }
    ]
};

// Comprehension passages with multiple questions
const comprehensionDatabase = {
    easy: [
        {
            passage: "Tom has a pet cat. The cat is orange. The cat likes to play with a ball. Tom feeds his cat every day. The cat sleeps on Tom's bed at night.",
            emoji: '🐱',
            questions: [
                { question: 'What pet does Tom have?', options: ['a cat', 'a dog', 'a bird', 'a fish'], answer: 'a cat' },
                { question: 'What color is the cat?', options: ['orange', 'black', 'white', 'gray'], answer: 'orange' },
                { question: 'What does the cat like to play with?', options: ['a ball', 'a toy', 'a string', 'a mouse'], answer: 'a ball' },
                { question: 'Where does the cat sleep?', options: ['on Tom\'s bed', 'on the floor', 'in a box', 'outside'], answer: 'on Tom\'s bed' }
            ]
        },
        {
            passage: "Lucy goes to the park. She sees many flowers. There are red roses and yellow daisies. A butterfly lands on a flower. Lucy watches the butterfly fly away.",
            emoji: '🌸',
            questions: [
                { question: 'Where does Lucy go?', options: ['to the park', 'to school', 'to the store', 'to home'], answer: 'to the park' },
                { question: 'What colors are the flowers?', options: ['red and yellow', 'blue and pink', 'white and purple', 'orange and green'], answer: 'red and yellow' },
                { question: 'What lands on a flower?', options: ['a butterfly', 'a bee', 'a bird', 'a ladybug'], answer: 'a butterfly' },
                { question: 'What does Lucy watch?', options: ['the butterfly fly away', 'the flowers grow', 'the sun set', 'children play'], answer: 'the butterfly fly away' }
            ]
        },
        {
            passage: "Ben has a red bike. He rides his bike to school every day. Ben wears a helmet to be safe. His best friend Tim rides with him. They always wave to the crossing guard.",
            emoji: '🚲',
            questions: [
                { question: 'What color is Ben\'s bike?', options: ['red', 'blue', 'green', 'yellow'], answer: 'red' },
                { question: 'Where does Ben ride his bike?', options: ['to school', 'to the park', 'to the store', 'to the beach'], answer: 'to school' },
                { question: 'What does Ben wear to be safe?', options: ['a helmet', 'a jacket', 'gloves', 'shoes'], answer: 'a helmet' },
                { question: 'Who rides with Ben?', options: ['Tim', 'Lucy', 'Tom', 'Sam'], answer: 'Tim' }
            ]
        },
        {
            passage: "Mia loves to paint. She has many colors of paint. Today she painted a big sun and a blue sky. She also painted green grass and a brown tree. Her mom put the painting on the fridge.",
            emoji: '🎨',
            questions: [
                { question: 'What does Mia love to do?', options: ['paint', 'read', 'sing', 'dance'], answer: 'paint' },
                { question: 'What color did she paint the sun?', options: ['yellow', 'orange', 'red', 'white'], answer: 'yellow' },
                { question: 'What color was the sky?', options: ['blue', 'gray', 'white', 'purple'], answer: 'blue' },
                { question: 'Where did mom put the painting?', options: ['on the fridge', 'on the wall', 'in a book', 'in the closet'], answer: 'on the fridge' }
            ]
        }
    ],
    medium: [
        {
            passage: "Sam and his family went to the beach on Saturday. They built a big sandcastle near the water. Sam found many beautiful shells. His little sister splashed in the waves. They ate sandwiches for lunch under a big umbrella. Everyone had a wonderful time at the beach.",
            emoji: '🏖️',
            questions: [
                { question: 'When did Sam go to the beach?', options: ['on Saturday', 'on Sunday', 'on Friday', 'on Monday'], answer: 'on Saturday' },
                { question: 'What did they build?', options: ['a sandcastle', 'a fort', 'a tower', 'a house'], answer: 'a sandcastle' },
                { question: 'What did Sam find?', options: ['beautiful shells', 'fish', 'crabs', 'rocks'], answer: 'beautiful shells' },
                { question: 'Where did they eat lunch?', options: ['under a big umbrella', 'in the car', 'at a restaurant', 'at home'], answer: 'under a big umbrella' }
            ]
        },
        {
            passage: "Emma loves reading books. Every night before bed, she reads for thirty minutes. Her favorite books are about animals and adventure. Emma has a small bookshelf in her room with twenty books. She wants to read all of them before summer ends.",
            emoji: '📚',
            questions: [
                { question: 'What does Emma love to do?', options: ['reading books', 'playing games', 'watching TV', 'drawing pictures'], answer: 'reading books' },
                { question: 'When does Emma read?', options: ['before bed', 'in the morning', 'after lunch', 'at school'], answer: 'before bed' },
                { question: 'How many books does Emma have?', options: ['twenty books', 'ten books', 'five books', 'thirty books'], answer: 'twenty books' },
                { question: 'What are her favorite books about?', options: ['animals and adventure', 'cars and trucks', 'cooking', 'sports'], answer: 'animals and adventure' }
            ]
        },
        {
            passage: "The school organized a field trip to the zoo. All the students were very excited. They saw elephants, giraffes, and lions. The zookeeper gave a special talk about how to care for animals. At the end of the trip, each student got a small toy animal as a souvenir. The teacher said they would write about their favorite animal when they returned to school.",
            emoji: '🦁',
            questions: [
                { question: 'Where did the school go?', options: ['to the zoo', 'to a museum', 'to a farm', 'to an aquarium'], answer: 'to the zoo' },
                { question: 'Who gave a talk?', options: ['the zookeeper', 'the teacher', 'a student', 'the principal'], answer: 'the zookeeper' },
                { question: 'What did students get at the end?', options: ['a small toy animal', 'candy', 'a book', 'a t-shirt'], answer: 'a small toy animal' },
                { question: 'What would they write about at school?', options: ['their favorite animal', 'the bus ride', 'their lunch', 'the weather'], answer: 'their favorite animal' }
            ]
        },
        {
            passage: "Maria started learning to play the piano three months ago. She practices for twenty minutes every day after school. Her teacher says she is making good progress. Maria's favorite song to play is 'Twinkle Twinkle Little Star'. Next month, she will perform at a small concert for her family and friends.",
            emoji: '🎹',
            questions: [
                { question: 'What instrument does Maria play?', options: ['piano', 'guitar', 'violin', 'drums'], answer: 'piano' },
                { question: 'How long does she practice?', options: ['twenty minutes', 'thirty minutes', 'one hour', 'ten minutes'], answer: 'twenty minutes' },
                { question: 'What is her favorite song?', options: ['Twinkle Twinkle Little Star', 'Happy Birthday', 'Mary Had a Little Lamb', 'Old MacDonald'], answer: 'Twinkle Twinkle Little Star' },
                { question: 'When will she perform?', options: ['next month', 'next week', 'tomorrow', 'next year'], answer: 'next month' }
            ]
        }
    ],
    hard: [
        {
            passage: "The rainforest is home to many amazing animals. Colorful parrots fly through the tall trees. Monkeys swing from branch to branch looking for fruit. The jaguar, a large spotted cat, hunts quietly on the forest floor. Tiny poison dart frogs hop among the leaves. The rainforest is noisy during the day with animal calls and sounds. At night, different animals come out to search for food.",
            emoji: '🌳',
            questions: [
                { question: 'Where do the parrots fly?', options: ['through the tall trees', 'over the water', 'in caves', 'near houses'], answer: 'through the tall trees' },
                { question: 'What do monkeys look for?', options: ['fruit', 'insects', 'water', 'leaves'], answer: 'fruit' },
                { question: 'What type of animal is a jaguar?', options: ['a large spotted cat', 'a small bird', 'a colorful frog', 'a type of monkey'], answer: 'a large spotted cat' },
                { question: 'When is the rainforest noisy?', options: ['during the day', 'only at night', 'in the morning', 'never'], answer: 'during the day' }
            ]
        },
        {
            passage: "Jake wants to become a scientist when he grows up. He loves conducting experiments in his backyard. Last week, he planted seeds to see how fast they would grow. He waters them every morning and measures their height with a ruler. Jake writes down all his observations in a special notebook. His teacher says he is very curious and asks good questions. Jake's parents are proud of his interest in science.",
            emoji: '🔬',
            questions: [
                { question: 'What does Jake want to become?', options: ['a scientist', 'a teacher', 'a doctor', 'an artist'], answer: 'a scientist' },
                { question: 'Where does Jake conduct experiments?', options: ['in his backyard', 'at school', 'in his room', 'at the library'], answer: 'in his backyard' },
                { question: 'What does Jake measure with a ruler?', options: ['the height of plants', 'the temperature', 'the time', 'the weight'], answer: 'the height of plants' },
                { question: 'Where does Jake write his observations?', options: ['in a special notebook', 'on his computer', 'on paper', 'in a diary'], answer: 'in a special notebook' }
            ]
        },
        {
            passage: "Ancient Egypt was one of the greatest civilizations in history. The Egyptians built massive pyramids as tombs for their pharaohs, or kings. These pyramids took many years to construct and required thousands of workers. The Egyptians also invented a form of writing called hieroglyphics, using pictures and symbols. They made paper from papyrus plants that grew along the Nile River. The Nile was very important because it provided water for farming in the desert.",
            emoji: '🏺',
            questions: [
                { question: 'What did Egyptians build as tombs?', options: ['pyramids', 'temples', 'castles', 'towers'], answer: 'pyramids' },
                { question: 'What was Egyptian writing called?', options: ['hieroglyphics', 'alphabet', 'cuneiform', 'symbols'], answer: 'hieroglyphics' },
                { question: 'What plant did they use to make paper?', options: ['papyrus', 'bamboo', 'cotton', 'wheat'], answer: 'papyrus' },
                { question: 'Why was the Nile River important?', options: ['provided water for farming', 'for transportation only', 'for fishing', 'for drinking water'], answer: 'provided water for farming' }
            ]
        },
        {
            passage: "Climate change is affecting our planet in many ways. As temperatures rise, glaciers and ice caps are melting, causing sea levels to increase. This puts coastal cities at risk of flooding. Weather patterns are becoming more extreme, with stronger hurricanes and longer droughts. Scientists say we need to reduce carbon emissions by using renewable energy like solar and wind power. Everyone can help by recycling, using less electricity, and planting trees.",
            emoji: '🌍',
            questions: [
                { question: 'What happens when glaciers melt?', options: ['sea levels increase', 'temperatures drop', 'rain stops', 'plants grow faster'], answer: 'sea levels increase' },
                { question: 'What type of energy should we use more?', options: ['renewable energy', 'coal', 'oil', 'gas'], answer: 'renewable energy' },
                { question: 'What are examples of renewable energy?', options: ['solar and wind power', 'coal and oil', 'gas and wood', 'nuclear only'], answer: 'solar and wind power' },
                { question: 'What can everyone do to help?', options: ['recycling and planting trees', 'drive more', 'use more electricity', 'throw away more'], answer: 'recycling and planting trees' }
            ]
        }
    ]
};

// Combine all words and sentences
const allWords = [...wordDatabase.easy, ...wordDatabase.medium, ...wordDatabase.hard];
const allSentences = [...sentenceDatabase.easy, ...sentenceDatabase.medium, ...sentenceDatabase.hard];
const allReadingSentences = [...readingSentences.easy, ...readingSentences.medium, ...readingSentences.hard];
const allComprehensions = [...comprehensionDatabase.easy, ...comprehensionDatabase.medium, ...comprehensionDatabase.hard];
const allRhymingWords = [...rhymingDatabase.easy, ...rhymingDatabase.medium, ...rhymingDatabase.hard];
const allDigraphs = [...digraphsDatabase.easy, ...digraphsDatabase.medium, ...digraphsDatabase.hard];

// Math problems database
const mathDatabase = {
    addition: {
        easy: [
            { problem: '1 + 1', answer: 2, options: [2, 3, 4, 5], emoji: '🍎', visual: 1 },
            { problem: '2 + 1', answer: 3, options: [2, 3, 4, 5], emoji: '⭐', visual: 2 },
            { problem: '1 + 2', answer: 3, options: [2, 3, 4, 5], emoji: '🍊', visual: 1 },
            { problem: '2 + 2', answer: 4, options: [3, 4, 5, 6], emoji: '🍇', visual: 2 },
            { problem: '3 + 1', answer: 4, options: [3, 4, 5, 6], emoji: '🍓', visual: 3 }
        ],
        medium: [
            { problem: '3 + 2', answer: 5, options: [4, 5, 6, 7], emoji: '🍌', visual: 3 },
            { problem: '4 + 2', answer: 6, options: [5, 6, 7, 8], emoji: '🍉', visual: 4 },
            { problem: '5 + 3', answer: 8, options: [6, 7, 8, 9], emoji: '🍒', visual: 5 },
            { problem: '4 + 4', answer: 8, options: [6, 7, 8, 9], emoji: '🍑', visual: 4 },
            { problem: '6 + 3', answer: 9, options: [7, 8, 9, 10], emoji: '🍍', visual: 6 }
        ],
        hard: [
            { problem: '7 + 4', answer: 11, options: [10, 11, 12, 13], emoji: '🎈', visual: 7 },
            { problem: '8 + 5', answer: 13, options: [11, 12, 13, 14], emoji: '🎁', visual: 8 },
            { problem: '9 + 6', answer: 15, options: [13, 14, 15, 16], emoji: '⚽', visual: 9 },
            { problem: '12 + 8', answer: 20, options: [18, 19, 20, 21], emoji: '🏀', visual: 12 },
            { problem: '15 + 5', answer: 20, options: [18, 19, 20, 21], emoji: '🎯', visual: 15 }
        ]
    },
    subtraction: {
        easy: [
            { problem: '2 - 1', answer: 1, options: [0, 1, 2, 3], emoji: '🍎', visual: 2 },
            { problem: '3 - 1', answer: 2, options: [1, 2, 3, 4], emoji: '⭐', visual: 3 },
            { problem: '3 - 2', answer: 1, options: [0, 1, 2, 3], emoji: '🍊', visual: 3 },
            { problem: '4 - 2', answer: 2, options: [1, 2, 3, 4], emoji: '🍇', visual: 4 },
            { problem: '5 - 3', answer: 2, options: [1, 2, 3, 4], emoji: '🍓', visual: 5 }
        ],
        medium: [
            { problem: '6 - 2', answer: 4, options: [3, 4, 5, 6], emoji: '🍌', visual: 6 },
            { problem: '7 - 3', answer: 4, options: [3, 4, 5, 6], emoji: '🍉', visual: 7 },
            { problem: '8 - 4', answer: 4, options: [3, 4, 5, 6], emoji: '🍒', visual: 8 },
            { problem: '9 - 5', answer: 4, options: [3, 4, 5, 6], emoji: '🍑', visual: 9 },
            { problem: '10 - 4', answer: 6, options: [5, 6, 7, 8], emoji: '🍍', visual: 10 }
        ],
        hard: [
            { problem: '12 - 5', answer: 7, options: [6, 7, 8, 9], emoji: '🎈', visual: 12 },
            { problem: '15 - 7', answer: 8, options: [7, 8, 9, 10], emoji: '🎁', visual: 15 },
            { problem: '18 - 9', answer: 9, options: [8, 9, 10, 11], emoji: '⚽', visual: 18 },
            { problem: '20 - 8', answer: 12, options: [11, 12, 13, 14], emoji: '🏀', visual: 20 },
            { problem: '20 - 5', answer: 15, options: [14, 15, 16, 17], emoji: '🎯', visual: 20 }
        ]
    },
    multiplication: {
        easy: [
            { problem: '2 × 1', answer: 2, options: [1, 2, 3, 4], emoji: '🍎', visual: 2 },
            { problem: '2 × 2', answer: 4, options: [2, 3, 4, 5], emoji: '⭐', visual: 2 },
            { problem: '3 × 1', answer: 3, options: [2, 3, 4, 5], emoji: '🍊', visual: 3 },
            { problem: '2 × 3', answer: 6, options: [4, 5, 6, 7], emoji: '🍇', visual: 2 },
            { problem: '4 × 1', answer: 4, options: [3, 4, 5, 6], emoji: '🍓', visual: 4 }
        ],
        medium: [
            { problem: '3 × 3', answer: 9, options: [7, 8, 9, 10], emoji: '🍌', visual: 3 },
            { problem: '4 × 2', answer: 8, options: [6, 7, 8, 9], emoji: '🍉', visual: 4 },
            { problem: '5 × 2', answer: 10, options: [8, 9, 10, 11], emoji: '🍒', visual: 5 },
            { problem: '3 × 4', answer: 12, options: [10, 11, 12, 13], emoji: '🍑', visual: 3 },
            { problem: '6 × 2', answer: 12, options: [10, 11, 12, 13], emoji: '🍍', visual: 6 }
        ],
        hard: [
            { problem: '5 × 4', answer: 20, options: [18, 19, 20, 21], emoji: '🎈', visual: 5 },
            { problem: '6 × 4', answer: 24, options: [22, 23, 24, 25], emoji: '🎁', visual: 6 },
            { problem: '7 × 3', answer: 21, options: [19, 20, 21, 22], emoji: '⚽', visual: 7 },
            { problem: '8 × 3', answer: 24, options: [22, 23, 24, 25], emoji: '🏀', visual: 8 },
            { problem: '9 × 2', answer: 18, options: [16, 17, 18, 19], emoji: '🎯', visual: 9 }
        ]
    },
    counting: [
        { question: 'Count the objects:', count: 3, emoji: '🍎', options: [2, 3, 4, 5] },
        { question: 'Count the objects:', count: 5, emoji: '⭐', options: [4, 5, 6, 7] },
        { question: 'Count the objects:', count: 7, emoji: '🎈', options: [6, 7, 8, 9] },
        { question: 'Count the objects:', count: 10, emoji: '🍇', options: [8, 9, 10, 11] },
        { question: 'Count the objects:', count: 12, emoji: '🌟', options: [10, 11, 12, 13] }
    ],
    clock: [
        { hour: 1, minute: 0, display: '1 o\'clock', options: ['1 o\'clock', '2 o\'clock', '12 o\'clock', '11 o\'clock'] },
        { hour: 2, minute: 0, display: '2 o\'clock', options: ['2 o\'clock', '3 o\'clock', '1 o\'clock', '12 o\'clock'] },
        { hour: 3, minute: 0, display: '3 o\'clock', options: ['3 o\'clock', '4 o\'clock', '2 o\'clock', '1 o\'clock'] },
        { hour: 4, minute: 30, display: 'half past 4', options: ['half past 4', '4 o\'clock', 'half past 5', 'half past 3'] },
        { hour: 5, minute: 15, display: 'quarter past 5', options: ['quarter past 5', 'half past 5', 'quarter to 6', '5 o\'clock'] },
        { hour: 6, minute: 0, display: '6 o\'clock', options: ['6 o\'clock', '7 o\'clock', '5 o\'clock', '8 o\'clock'] },
        { hour: 7, minute: 30, display: 'half past 7', options: ['half past 7', '7 o\'clock', 'half past 8', 'half past 6'] },
        { hour: 8, minute: 45, display: 'quarter to 9', options: ['quarter to 9', 'half past 8', 'quarter past 8', 'quarter to 10'] },
        { hour: 9, minute: 0, display: '9 o\'clock', options: ['9 o\'clock', '10 o\'clock', '8 o\'clock', '11 o\'clock'] },
        { hour: 10, minute: 15, display: 'quarter past 10', options: ['quarter past 10', 'half past 10', 'quarter to 11', '10 o\'clock'] },
        { hour: 11, minute: 30, display: 'half past 11', options: ['half past 11', '11 o\'clock', 'half past 12', 'half past 10'] },
        { hour: 12, minute: 0, display: '12 o\'clock', options: ['12 o\'clock', '1 o\'clock', '11 o\'clock', '10 o\'clock'] }
    ]
};

// French words database
const frenchDatabase = {
    words: {
        easy: [
            { english: 'cat', french: 'chat', emoji: '🐱', options: ['chat', 'chien', 'oiseau', 'poisson'] },
            { english: 'dog', french: 'chien', emoji: '🐕', options: ['chat', 'chien', 'oiseau', 'lapin'] },
            { english: 'house', french: 'maison', emoji: '🏠', options: ['maison', 'école', 'voiture', 'livre'] },
            { english: 'book', french: 'livre', emoji: '📚', options: ['livre', 'table', 'chaise', 'porte'] },
            { english: 'water', french: 'eau', emoji: '💧', options: ['eau', 'lait', 'jus', 'café'] }
        ],
        medium: [
            { english: 'apple', french: 'pomme', emoji: '🍎', options: ['pomme', 'orange', 'banane', 'fraise'] },
            { english: 'flower', french: 'fleur', emoji: '🌸', options: ['fleur', 'arbre', 'herbe', 'feuille'] },
            { english: 'sun', french: 'soleil', emoji: '☀️', options: ['soleil', 'lune', 'étoile', 'nuage'] },
            { english: 'bird', french: 'oiseau', emoji: '🐦', options: ['oiseau', 'papillon', 'abeille', 'insecte'] },
            { english: 'cheese', french: 'fromage', emoji: '🧀', options: ['fromage', 'pain', 'beurre', 'lait'] }
        ],
        hard: [
            { english: 'butterfly', french: 'papillon', emoji: '🦋', options: ['papillon', 'libellule', 'coccinelle', 'mouche'] },
            { english: 'strawberry', french: 'fraise', emoji: '🍓', options: ['fraise', 'framboise', 'cerise', 'myrtille'] },
            { english: 'rainbow', french: 'arc-en-ciel', emoji: '🌈', options: ['arc-en-ciel', 'nuage', 'pluie', 'tempête'] },
            { english: 'elephant', french: 'éléphant', emoji: '🐘', options: ['éléphant', 'girafe', 'lion', 'tigre'] },
            { english: 'computer', french: 'ordinateur', emoji: '💻', options: ['ordinateur', 'téléphone', 'tablette', 'écran'] }
        ]
    },
    numbers: [
        { number: 1, french: 'un', options: ['un', 'deux', 'trois', 'quatre'] },
        { number: 2, french: 'deux', options: ['un', 'deux', 'trois', 'quatre'] },
        { number: 3, french: 'trois', options: ['deux', 'trois', 'quatre', 'cinq'] },
        { number: 4, french: 'quatre', options: ['trois', 'quatre', 'cinq', 'six'] },
        { number: 5, french: 'cinq', options: ['quatre', 'cinq', 'six', 'sept'] },
        { number: 6, french: 'six', options: ['cinq', 'six', 'sept', 'huit'] },
        { number: 7, french: 'sept', options: ['six', 'sept', 'huit', 'neuf'] },
        { number: 8, french: 'huit', options: ['sept', 'huit', 'neuf', 'dix'] },
        { number: 9, french: 'neuf', options: ['huit', 'neuf', 'dix', 'onze'] },
        { number: 10, french: 'dix', options: ['neuf', 'dix', 'onze', 'douze'] }
    ],
    colors: [
        { color: 'red', french: 'rouge', emoji: '🔴', options: ['rouge', 'bleu', 'vert', 'jaune'] },
        { color: 'blue', french: 'bleu', emoji: '🔵', options: ['rouge', 'bleu', 'vert', 'jaune'] },
        { color: 'green', french: 'vert', emoji: '🟢', options: ['bleu', 'vert', 'jaune', 'orange'] },
        { color: 'yellow', french: 'jaune', emoji: '🟡', options: ['vert', 'jaune', 'orange', 'rose'] },
        { color: 'orange', french: 'orange', emoji: '🟠', options: ['jaune', 'orange', 'rose', 'violet'] },
        { color: 'purple', french: 'violet', emoji: '🟣', options: ['orange', 'violet', 'noir', 'blanc'] },
        { color: 'black', french: 'noir', emoji: '⚫', options: ['violet', 'noir', 'blanc', 'gris'] },
        { color: 'white', french: 'blanc', emoji: '⚪', options: ['noir', 'blanc', 'gris', 'marron'] }
    ],
    phrases: [
        { english: 'Hello', french: 'Bonjour', options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'] },
        { english: 'Goodbye', french: 'Au revoir', options: ['Bonjour', 'Merci', 'Au revoir', 'Pardon'] },
        { english: 'Thank you', french: 'Merci', options: ['Merci', 'Pardon', 'Oui', 'Non'] },
        { english: 'Please', french: "S'il vous plaît", options: ["S'il vous plaît", 'Merci', 'Pardon', 'Excusez-moi'] },
        { english: 'Yes', french: 'Oui', options: ['Oui', 'Non', 'Peut-être', 'Jamais'] },
        { english: 'No', french: 'Non', options: ['Oui', 'Non', 'Merci', 'Pardon'] }
    ],
    days: [
        { day: 'Monday', french: 'lundi', emoji: '📅', options: ['lundi', 'mardi', 'mercredi', 'jeudi'] },
        { day: 'Tuesday', french: 'mardi', emoji: '📅', options: ['lundi', 'mardi', 'mercredi', 'jeudi'] },
        { day: 'Wednesday', french: 'mercredi', emoji: '📅', options: ['mardi', 'mercredi', 'jeudi', 'vendredi'] },
        { day: 'Thursday', french: 'jeudi', emoji: '📅', options: ['mercredi', 'jeudi', 'vendredi', 'samedi'] },
        { day: 'Friday', french: 'vendredi', emoji: '📅', options: ['jeudi', 'vendredi', 'samedi', 'dimanche'] },
        { day: 'Saturday', french: 'samedi', emoji: '📅', options: ['vendredi', 'samedi', 'dimanche', 'lundi'] },
        { day: 'Sunday', french: 'dimanche', emoji: '📅', options: ['samedi', 'dimanche', 'lundi', 'mardi'] }
    ]
};

// Achievements system
const achievements = [
    { id: 'first_word', emoji: '🌟', name: 'First Steps!', description: 'Complete your first word', earned: false },
    { id: 'streak_5', emoji: '🔥', name: 'On Fire!', description: 'Get a 5-word streak', earned: false },
    { id: 'score_100', emoji: '💯', name: 'Century!', description: 'Score 100 points', earned: false },
    { id: 'level_3', emoji: '🚀', name: 'Rising Star!', description: 'Reach Level 3', earned: false },
    { id: 'sentence_master', emoji: '📝', name: 'Sentence Master!', description: 'Complete 5 sentences', earned: false },
    { id: 'perfect_10', emoji: '💎', name: 'Perfect Ten!', description: 'Get 10 correct in a row', earned: false },
    { id: 'star_collector', emoji: '⭐', name: 'Star Collector!', description: 'Earn 20 stars', earned: false }
];

// Game state
let currentSubject = 'english'; // 'english', 'math', 'french'
let currentWord = null;
let currentSentence = null;
let currentReadingSentence = null;
let currentComprehension = null;
let currentComprehensionQuestionIndex = 0;
let currentMathProblem = null;
let currentClockTime = null;
let currentFrenchItem = null;
let score = 0;
let xp = 0;
let level = 1;
let streak = 0;
let stars = 0;
let currentMode = 'reading'; // English: 'reading', 'spelling', 'sentence', 'comprehension', 'rhyming'
                             // Math: 'addition', 'subtraction', 'multiplication', 'counting'
                             // French: 'words', 'numbers', 'colors', 'phrases', 'days'
let readingType = 'word'; // 'word' or 'sentence' for reading mode
let usedWords = new Set();
let usedSentences = new Set();
let usedReadingSentences = new Set();
let usedComprehensions = new Set();
let usedRhymingWords = new Set();
let usedDigraphs = new Set();
let usedMathProblems = new Set();
let usedFrenchItems = new Set();
let currentRhymingWord = null;
let currentDigraph = null;
let selectedRhymes = new Set();
let userSentence = [];
let questionsCompleted = 0;
let sentencesCompleted = 0;
let correctAnswers = 0;
let pendingAudioCallback = null;
const AUDIO_PASSCODE = '0722921328';

// Voice settings
let englishVoice = null;
let frenchVoice = null;
let allVoices = [];

// Game mode state
let currentGameMode = null; // 'prize' or 'tugofwar'
let currentDifficulty = 'easy'; // Track current difficulty level

// Tug of War game state
let towPlayerScore = 0;
let towComputerScore = 0;
let towRopePosition = 50; // 0-100, 50 is center
let towCurrentQuestion = null;
let towCurrentQuestionType = null;
let towRoundsToWin = 5;
let towIsPlayerTurn = true;

// Two Player Tug of War state
let towOpponentMode = null; // 'computer' or 'player'
let player1Name = 'Player 1';
let player1Color = '#667eea';
let player2Name = 'Player 2';
let player2Color = '#4caf50';
let player1Score = 0;
let player2Score = 0;
let player1CurrentQuestion = null;
let player2CurrentQuestion = null;
let player1QuestionType = null;
let player2QuestionType = null;
let twoPlayerRopePosition = 50; // 0-100, 50 is center
let currentRound = 1;

// DOM Elements
const readingGame = document.getElementById('reading-game');
const spellingGame = document.getElementById('spelling-game');
const sentenceGame = document.getElementById('sentence-game');
const readingModeBtn = document.getElementById('readingMode');
const spellingModeBtn = document.getElementById('spellingMode');
const sentenceModeBtn = document.getElementById('sentenceMode');
const wordReadingBtn = document.getElementById('wordReadingBtn');
const sentenceReadingBtn = document.getElementById('sentenceReadingBtn');
const currentWordEl = document.getElementById('currentWord');
const wordImageEl = document.getElementById('wordImage');
const spellingImageEl = document.getElementById('spellingImage');
const sentenceImageEl = document.getElementById('sentenceImage');
const readingOptionsEl = document.getElementById('readingOptions');
const readingQuestionEl = document.getElementById('readingQuestion');
const sentenceReadingDisplayEl = document.getElementById('sentenceReadingDisplay');
const pronounceBtn = document.getElementById('pronounceBtn');
const spellingPronounceBtn = document.getElementById('spellingPronounceBtn');
const sentencePronounceBtn = document.getElementById('sentencePronounceBtn');
const spellingInput = document.getElementById('spellingInput');
const checkSpellingBtn = document.getElementById('checkSpelling');
const letterButtonsEl = document.getElementById('letterButtons');
const sentenceDisplayEl = document.getElementById('sentenceDisplay');
const wordBankEl = document.getElementById('wordBank');
const checkSentenceBtn = document.getElementById('checkSentence');
const feedbackEl = document.getElementById('feedback');
const feedbackEmojiEl = document.getElementById('feedbackEmoji');
const feedbackTextEl = document.getElementById('feedbackText');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const levelEl = document.getElementById('level');
const starsEl = document.getElementById('stars');
const progressBarEl = document.getElementById('progressBar');
const progressTextEl = document.getElementById('progressText');
const achievementsEl = document.getElementById('achievements');
const rewardPopupEl = document.getElementById('rewardPopup');
const rewardAnimationEl = document.getElementById('rewardAnimation');
const rewardTitleEl = document.getElementById('rewardTitle');
const rewardMessageEl = document.getElementById('rewardMessage');
const closeRewardBtn = document.getElementById('closeReward');
const passcodeModalEl = document.getElementById('passcodeModal');
const passcodeInputEl = document.getElementById('passcodeInput');
const submitPasscodeBtn = document.getElementById('submitPasscode');
const cancelPasscodeBtn = document.getElementById('cancelPasscode');
const passcodeErrorEl = document.getElementById('passcodeError');
const comprehensionGame = document.getElementById('comprehension-game');
const comprehensionModeBtn = document.getElementById('comprehensionMode');
const passageTextEl = document.getElementById('passageText');
const comprehensionIconEl = document.getElementById('comprehensionIcon');
const comprehensionQuestionTitleEl = document.getElementById('comprehensionQuestionTitle');
const comprehensionQuestionTextEl = document.getElementById('comprehensionQuestionText');
const comprehensionOptionsEl = document.getElementById('comprehensionOptions');
const comprehensionPronounceBtn = document.getElementById('comprehensionPronounceBtn');
const rhymingGame = document.getElementById('rhyming-game');
const rhymingModeBtn = document.getElementById('rhymingMode');
const targetWordEl = document.getElementById('targetWord');
const targetPronounceBtn = document.getElementById('targetPronounceBtn');
const rhymingOptionsEl = document.getElementById('rhymingOptions');
const checkRhymingBtn = document.getElementById('checkRhyming');
const digraphsGame = document.getElementById('digraphs-game');
const digraphsModeBtn = document.getElementById('digraphsMode');
const digraphWordEl = document.getElementById('digraphWord');
const digraphEmojiEl = document.getElementById('digraphEmoji');
const digraphPronounceBtn = document.getElementById('digraphPronounceBtn');
const digraphOptionsEl = document.getElementById('digraphOptions');

// Subject selector elements
const englishSubjectBtn = document.getElementById('englishSubject');
const mathSubjectBtn = document.getElementById('mathSubject');
const frenchSubjectBtn = document.getElementById('frenchSubject');
const musicSubjectBtn = document.getElementById('musicSubject');
const englishModesEl = document.getElementById('english-modes');
const mathModesEl = document.getElementById('math-modes');
const frenchModesEl = document.getElementById('french-modes');
const musicModesEl = document.getElementById('music-modes');

// Math game elements
const mathGame = document.getElementById('math-game');
const additionModeBtn = document.getElementById('additionMode');
const subtractionModeBtn = document.getElementById('subtractionMode');
const multiplicationModeBtn = document.getElementById('multiplicationMode');
const countingModeBtn = document.getElementById('countingMode');
const clockModeBtn = document.getElementById('clockMode');
const mathVisualEl = document.getElementById('mathVisual');
const mathEquationEl = document.getElementById('mathEquation');
const mathOptionsEl = document.getElementById('mathOptions');

// Clock game elements
const clockGame = document.getElementById('clock-game');
const clockDisplayEl = document.getElementById('clockDisplay');
const hourHandEl = document.getElementById('hourHand');
const minuteHandEl = document.getElementById('minuteHand');
const clockOptionsEl = document.getElementById('clockOptions');

// French game elements
const frenchGame = document.getElementById('french-game');
const frenchWordsModeBtn = document.getElementById('frenchWordsMode');
const frenchNumbersModeBtn = document.getElementById('frenchNumbersMode');
const frenchColorsModeBtn = document.getElementById('frenchColorsMode');
const frenchPhrasesModeBtn = document.getElementById('frenchPhrasesMode');
const frenchDaysModeBtn = document.getElementById('frenchDaysMode');
const frenchWordDisplayEl = document.getElementById('frenchWordDisplay');
const frenchEnglishEl = document.getElementById('frenchEnglish');
const frenchOptionsEl = document.getElementById('frenchOptions');
const frenchPronounceBtn = document.getElementById('frenchPronounce');

// Music game elements
const pianoGame = document.getElementById('piano-game');
const musicQuizGame = document.getElementById('music-quiz-game');
const melodiesGame = document.getElementById('melodies-game');
const recorderGame = document.getElementById('recorder-game');
const pianoModeBtn = document.getElementById('pianoMode');
const musicQuizModeBtn = document.getElementById('musicQuizMode');
const melodiesModeBtn = document.getElementById('melodiesMode');
const recorderModeBtn = document.getElementById('recorderMode');
const currentNoteEl = document.getElementById('currentNote');
const playNoteBtn = document.getElementById('playNoteBtn');
const practiceFeedbackEl = document.getElementById('practiceFeedback');
const targetNoteTextEl = document.getElementById('targetNoteText');
const musicQuizOptionsEl = document.getElementById('musicQuizOptions');
const playQuizNoteBtn = document.getElementById('playQuizNoteBtn');
const musicFactDisplayEl = document.getElementById('musicFactDisplay');
const playMelodyBtn = document.getElementById('playMelodyBtn');
const checkMelodyBtn = document.getElementById('checkMelodyBtn');
const resetMelodyBtn = document.getElementById('resetMelodyBtn');
const playerNotesDisplayEl = document.getElementById('playerNotesDisplay');
const recorderQuizOptionsEl = document.getElementById('recorderQuizOptions');
const playRecorderNoteBtn = document.getElementById('playRecorderNoteBtn');
const recorderTipDisplayEl = document.getElementById('recorderTipDisplay');

// Mode selection elements
const modeSelectionEl = document.getElementById('mode-selection');
const prizeModeCard = document.getElementById('prizeModeCard');
const tugOfWarModeCard = document.getElementById('tugOfWarModeCard');
const prizeModeContainer = document.getElementById('prize-mode-container');
const tugOfWarContainer = document.getElementById('tug-of-war-container');

// Opponent selection elements
const towOpponentSelectionEl = document.getElementById('tow-opponent-selection');
const vsComputerCard = document.getElementById('vsComputerCard');
const vsPlayerCard = document.getElementById('vsPlayerCard');
const backFromOpponentBtn = document.getElementById('backFromOpponentBtn');

// Player setup elements
const playerSetupScreen = document.getElementById('player-setup-screen');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');
const colorPickerBtns = document.querySelectorAll('.color-btn');
const player1Preview = document.getElementById('player1Preview');
const player2Preview = document.getElementById('player2Preview');
const startTwoPlayerGameBtn = document.getElementById('startTwoPlayerGame');
const backFromSetupBtn = document.getElementById('backFromSetupBtn');

// Tug of War elements (VS Computer)
const backToMenuBtn = document.getElementById('backToMenuBtn');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const ropeCenterEl = document.getElementById('ropeCenter');
const towFlagEl = document.getElementById('towFlag');
const towStatusEl = document.getElementById('towStatus');
const towModeDisplayEl = document.getElementById('towModeDisplay');
const towQuestionContentEl = document.getElementById('towQuestionContent');
const towOptionsEl = document.getElementById('towOptions');

// Two Player Tug of War elements
const twoPlayerTowContainer = document.getElementById('two-player-tow-container');
const backToMenuBtn2P = document.getElementById('backToMenuBtn2P');
const player1NameDisplayEl = document.getElementById('player1NameDisplay');
const player2NameDisplayEl = document.getElementById('player2NameDisplay');
const player1ScoreDisplayEl = document.getElementById('player1ScoreDisplay');
const player2ScoreDisplayEl = document.getElementById('player2ScoreDisplay');
const character1Body = document.getElementById('character1Body');
const character2Body = document.getElementById('character2Body');
const towFlag2PEl = document.getElementById('towFlag2P');
const towStatus2PEl = document.getElementById('towStatus2P');
const player1Panel = document.getElementById('player1Panel');
const player2Panel = document.getElementById('player2Panel');
const player1Header = document.getElementById('player1Header');
const player2Header = document.getElementById('player2Header');
const towModeDisplay1El = document.getElementById('towModeDisplay1');
const towModeDisplay2El = document.getElementById('towModeDisplay2');
const towQuestionContent1El = document.getElementById('towQuestionContent1');
const towQuestionContent2El = document.getElementById('towQuestionContent2');
const towOptions1El = document.getElementById('towOptions1');
const towOptions2El = document.getElementById('towOptions2');
const feedback1El = document.getElementById('feedback1');
const feedback2El = document.getElementById('feedback2');

// Load available voices
function loadVoices() {
    allVoices = window.speechSynthesis.getVoices();
    
    if (allVoices.length > 0) {
        // Find English voice (prefer female voices for children)
        englishVoice = allVoices.find(voice => 
            voice.lang.startsWith('en') && 
            (voice.name.includes('Female') || voice.name.includes('Zira') || voice.name.includes('Samantha'))
        ) || allVoices.find(voice => voice.lang.startsWith('en')) || allVoices[0];
        
        // Find French voice
        frenchVoice = allVoices.find(voice => 
            voice.lang.startsWith('fr') && 
            (voice.name.includes('Female') || voice.name.includes('Hortense') || voice.name.includes('Amelie'))
        ) || allVoices.find(voice => voice.lang.startsWith('fr')) || allVoices[0];
        
        console.log('English Voice:', englishVoice?.name);
        console.log('French Voice:', frenchVoice?.name);
    }
}

// Initialize the game
function init() {
    loadVoices();
    createLetterButtons();
    setupEventListeners();
    
    // Show mode selection screen initially
    showModeSelection();
    
    // Voices may load asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}

// Show mode selection screen
function showModeSelection() {
    if (modeSelectionEl) modeSelectionEl.classList.remove('hidden');
    if (prizeModeContainer) prizeModeContainer.classList.add('hidden');
    if (tugOfWarContainer) tugOfWarContainer.classList.add('hidden');
    if (twoPlayerTowContainer) twoPlayerTowContainer.classList.add('hidden');
    if (towOpponentSelectionEl) towOpponentSelectionEl.classList.add('hidden');
    if (playerSetupScreen) playerSetupScreen.classList.add('hidden');
    currentGameMode = null;
}

// Back to main menu from Prize Mode
function backToMainMenu() {
    // Hide all game sections
    if (readingGame) readingGame.classList.remove('active');
    if (spellingGame) spellingGame.classList.remove('active');
    if (sentenceGame) sentenceGame.classList.remove('active');
    if (comprehensionGame) comprehensionGame.classList.remove('active');
    if (rhymingGame) rhymingGame.classList.remove('active');
    if (mathGame) mathGame.classList.remove('active');
    if (frenchGame) frenchGame.classList.remove('active');
    
    // Hide feedback and next button
    hideFeedback();
    if (nextBtn) nextBtn.classList.add('hidden');
    
    // Return to mode selection
    showModeSelection();
}

// Show opponent selection screen
function showOpponentSelection() {
    modeSelectionEl.classList.add('hidden');
    towOpponentSelectionEl.classList.remove('hidden');
    playerSetupScreen.classList.add('hidden');
}

// Show player setup screen
function showPlayerSetup() {
    towOpponentSelectionEl.classList.add('hidden');
    playerSetupScreen.classList.remove('hidden');
    // Reset to default values
    player1NameInput.value = player1Name;
    player2NameInput.value = player2Name;
    updatePlayerPreviews();
}

// Update player character previews
function updatePlayerPreviews() {
    if (player1Preview) {
        player1Preview.style.backgroundColor = player1Color;
    }
    if (player2Preview) {
        player2Preview.style.backgroundColor = player2Color;
    }
}

// Start Prize Mode
function startPrizeMode() {
    console.log('Starting Prize Mode...');
    currentGameMode = 'prize';
    modeSelectionEl.classList.add('hidden');
    prizeModeContainer.classList.remove('hidden');
    tugOfWarContainer.classList.add('hidden');
    if (twoPlayerTowContainer) twoPlayerTowContainer.classList.add('hidden');
    
    // Ensure reading game is active by default
    if (readingGame) {
        readingGame.classList.add('active');
        spellingGame.classList.remove('active');
        sentenceGame.classList.remove('active');
        comprehensionGame.classList.remove('active');
        rhymingGame.classList.remove('active');
        mathGame.classList.remove('active');
        frenchGame.classList.remove('active');
    }
    
    loadNewWord();
}

// Start Tug of War Mode - directly start computer mode
function startTugOfWarMode() {
    console.log('Starting Tug of War Mode...');
    currentGameMode = 'tugofwar';
    modeSelectionEl.classList.add('hidden');
    prizeModeContainer.classList.add('hidden');
    tugOfWarContainer.classList.remove('hidden');
    initializeTugOfWar();
}

// Start Tug of War VS Computer
function startTugOfWarVsComputer() {
    towOpponentMode = 'computer';
    towOpponentSelectionEl.classList.add('hidden');
    modeSelectionEl.classList.add('hidden');
    prizeModeContainer.classList.add('hidden');
    tugOfWarContainer.classList.remove('hidden');
    twoPlayerTowContainer.classList.add('hidden');
    initializeTugOfWar();
}

// Start Tug of War VS Player
function startTugOfWarVsPlayer() {
    towOpponentMode = 'player';
    // Get player names
    player1Name = player1NameInput.value.trim() || 'Player 1';
    player2Name = player2NameInput.value.trim() || 'Player 2';
    
    playerSetupScreen.classList.add('hidden');
    modeSelectionEl.classList.add('hidden');
    prizeModeContainer.classList.add('hidden');
    tugOfWarContainer.classList.add('hidden');
    twoPlayerTowContainer.classList.remove('hidden');
    
    initializeTwoPlayerTugOfWar();
}

// Setup event listeners
function setupEventListeners() {
    // Mode selection
    console.log('Setting up event listeners...');
    console.log('prizeModeCard:', prizeModeCard);
    console.log('tugOfWarModeCard:', tugOfWarModeCard);
    
    if (prizeModeCard) {
        const prizeBtn = prizeModeCard.querySelector('.mode-select-btn');
        console.log('Prize button:', prizeBtn);
        if (prizeBtn) {
            prizeBtn.addEventListener('click', startPrizeMode);
        }
    }
    
    if (tugOfWarModeCard) {
        const towBtn = tugOfWarModeCard.querySelector('.mode-select-btn');
        console.log('Tug of War button:', towBtn);
        if (towBtn) {
            towBtn.addEventListener('click', startTugOfWarMode);
        }
    }
    
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', showModeSelection);
    }
    if (backToMenuBtn2P) {
        backToMenuBtn2P.addEventListener('click', showModeSelection);
    }
    
    // Opponent selection
    if (vsComputerCard) {
        const vsComputerBtn = vsComputerCard.querySelector('.opponent-select-btn');
        if (vsComputerBtn) {
            vsComputerBtn.addEventListener('click', startTugOfWarVsComputer);
        }
    }
    
    if (vsPlayerCard) {
        const vsPlayerBtn = vsPlayerCard.querySelector('.opponent-select-btn');
        if (vsPlayerBtn) {
            vsPlayerBtn.addEventListener('click', showPlayerSetup);
        }
    }
    
    if (backFromOpponentBtn) {
        backFromOpponentBtn.addEventListener('click', showModeSelection);
    }
    
    // Player setup
    if (backFromSetupBtn) {
        backFromSetupBtn.addEventListener('click', showOpponentSelection);
    }
    if (startTwoPlayerGameBtn) {
        startTwoPlayerGameBtn.addEventListener('click', startTugOfWarVsPlayer);
    }
    
    // Also add click handlers directly to the cards as a fallback
    if (prizeModeCard) {
        prizeModeCard.addEventListener('click', (e) => {
            console.log('Prize Mode card clicked');
            if (e.target.classList.contains('mode-select-btn') || e.target.closest('.mode-select-btn')) {
                startPrizeMode();
            }
        });
    }
    
    if (tugOfWarModeCard) {
        tugOfWarModeCard.addEventListener('click', (e) => {
            console.log('Tug of War card clicked');
            if (e.target.classList.contains('mode-select-btn') || e.target.closest('.mode-select-btn')) {
                startTugOfWarMode();
            }
        });
    }
    
    // Color picker buttons
    colorPickerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const player = this.getAttribute('data-player');
            const color = this.getAttribute('data-color');
            
            if (player === '1') {
                player1Color = color;
                // Update active state
                document.querySelectorAll('[data-player="1"]').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            } else if (player === '2') {
                player2Color = color;
                // Update active state
                document.querySelectorAll('[data-player="2"]').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            }
            
            updatePlayerPreviews();
        });
    });
    
    // Subject switching
    englishSubjectBtn.addEventListener('click', () => switchSubject('english'));
    mathSubjectBtn.addEventListener('click', () => switchSubject('math'));
    frenchSubjectBtn.addEventListener('click', () => switchSubject('french'));
    musicSubjectBtn.addEventListener('click', () => switchSubject('music'));
    
    // English modes
    readingModeBtn.addEventListener('click', () => switchMode('reading'));
    spellingModeBtn.addEventListener('click', () => switchMode('spelling'));
    sentenceModeBtn.addEventListener('click', () => switchMode('sentence'));
    comprehensionModeBtn.addEventListener('click', () => switchMode('comprehension'));
    rhymingModeBtn.addEventListener('click', () => switchMode('rhyming'));
    digraphsModeBtn.addEventListener('click', () => switchMode('digraphs'));
    
    // Math modes
    additionModeBtn.addEventListener('click', () => switchMode('addition'));
    subtractionModeBtn.addEventListener('click', () => switchMode('subtraction'));
    multiplicationModeBtn.addEventListener('click', () => switchMode('multiplication'));
    countingModeBtn.addEventListener('click', () => switchMode('counting'));
    clockModeBtn.addEventListener('click', () => switchMode('clock'));
    
    // French modes
    frenchWordsModeBtn.addEventListener('click', () => switchMode('words'));
    frenchNumbersModeBtn.addEventListener('click', () => switchMode('numbers'));
    frenchColorsModeBtn.addEventListener('click', () => switchMode('colors'));
    frenchPhrasesModeBtn.addEventListener('click', () => switchMode('phrases'));
    frenchDaysModeBtn.addEventListener('click', () => switchMode('days'));
    
    // Music modes
    pianoModeBtn.addEventListener('click', () => switchMode('piano'));
    musicQuizModeBtn.addEventListener('click', () => switchMode('musicQuiz'));
    melodiesModeBtn.addEventListener('click', () => switchMode('melodies'));
    recorderModeBtn.addEventListener('click', () => switchMode('recorder'));
    
    wordReadingBtn.addEventListener('click', () => switchReadingType('word'));
    sentenceReadingBtn.addEventListener('click', () => switchReadingType('sentence'));
    pronounceBtn.addEventListener('click', pronounceCurrentContent);
    spellingPronounceBtn.addEventListener('click', pronounceWord);
    sentencePronounceBtn.addEventListener('click', pronounceSentence);
    comprehensionPronounceBtn.addEventListener('click', pronounceComprehension);
    targetPronounceBtn.addEventListener('click', pronounceTargetWord);
    frenchPronounceBtn.addEventListener('click', pronounceFrench);
    checkSpellingBtn.addEventListener('click', checkSpelling);
    checkRhymingBtn.addEventListener('click', checkRhyming);
    checkSentenceBtn.addEventListener('click', checkSentence);
    nextBtn.addEventListener('click', loadNewWord);
    closeRewardBtn.addEventListener('click', closeRewardPopup);
    submitPasscodeBtn.addEventListener('click', checkPasscode);
    cancelPasscodeBtn.addEventListener('click', closePasscodeModal);
    spellingInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkSpelling();
        }
    });
    passcodeInputEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPasscode();
        }
    });
}

// Switch between reading and spelling modes
// Switch between subjects
function switchSubject(subject) {
    currentSubject = subject;
    
    // Update subject button states
    englishSubjectBtn.classList.remove('active');
    mathSubjectBtn.classList.remove('active');
    frenchSubjectBtn.classList.remove('active');
    musicSubjectBtn.classList.remove('active');
    
    // Hide all mode groups
    englishModesEl.classList.add('hidden');
    mathModesEl.classList.add('hidden');
    frenchModesEl.classList.add('hidden');
    musicModesEl.classList.add('hidden');
    
    // Remove all mode button active states first
    readingModeBtn.classList.remove('active');
    spellingModeBtn.classList.remove('active');
    sentenceModeBtn.classList.remove('active');
    comprehensionModeBtn.classList.remove('active');
    rhymingModeBtn.classList.remove('active');
    additionModeBtn.classList.remove('active');
    subtractionModeBtn.classList.remove('active');
    multiplicationModeBtn.classList.remove('active');
    countingModeBtn.classList.remove('active');
    frenchWordsModeBtn.classList.remove('active');
    frenchNumbersModeBtn.classList.remove('active');
    frenchColorsModeBtn.classList.remove('active');
    frenchPhrasesModeBtn.classList.remove('active');
    frenchDaysModeBtn.classList.remove('active');
    pianoModeBtn.classList.remove('active');
    musicQuizModeBtn.classList.remove('active');
    melodiesModeBtn.classList.remove('active');
    recorderModeBtn.classList.remove('active');
    
    // Hide all games - remove active class
    readingGame.classList.remove('active');
    spellingGame.classList.remove('active');
    sentenceGame.classList.remove('active');
    comprehensionGame.classList.remove('active');
    rhymingGame.classList.remove('active');
    digraphsGame.classList.remove('active');
    mathGame.classList.remove('active');
    frenchGame.classList.remove('active');
    pianoGame.classList.remove('active');
    musicQuizGame.classList.remove('active');
    melodiesGame.classList.remove('active');
    recorderGame.classList.remove('active');
    
    if (subject === 'english') {
        englishSubjectBtn.classList.add('active');
        englishModesEl.classList.remove('hidden');
        currentMode = 'reading';
        switchMode('reading');
    } else if (subject === 'math') {
        mathSubjectBtn.classList.add('active');
        mathModesEl.classList.remove('hidden');
        currentMode = 'addition';
        switchMode('addition');
    } else if (subject === 'french') {
        frenchSubjectBtn.classList.add('active');
        frenchModesEl.classList.remove('hidden');
        currentMode = 'words';
        switchMode('words');
    } else if (subject === 'music') {
        musicSubjectBtn.classList.add('active');
        musicModesEl.classList.remove('hidden');
        currentMode = 'piano';
        switchMode('piano');
    }
    
    hideFeedback();
    nextBtn.classList.add('hidden');
}

function switchMode(mode) {
    currentMode = mode;
    
    // Hide all games by removing active class
    readingGame.classList.remove('active');
    spellingGame.classList.remove('active');
    sentenceGame.classList.remove('active');
    comprehensionGame.classList.remove('active');
    rhymingGame.classList.remove('active');
    digraphsGame.classList.remove('active');
    mathGame.classList.remove('active');
    clockGame.classList.remove('active');
    frenchGame.classList.remove('active');
    pianoGame.classList.remove('active');
    musicQuizGame.classList.remove('active');
    melodiesGame.classList.remove('active');
    recorderGame.classList.remove('active');
    
    // Remove all mode button active states
    readingModeBtn.classList.remove('active');
    spellingModeBtn.classList.remove('active');
    sentenceModeBtn.classList.remove('active');
    comprehensionModeBtn.classList.remove('active');
    rhymingModeBtn.classList.remove('active');
    digraphsModeBtn.classList.remove('active');
    additionModeBtn.classList.remove('active');
    subtractionModeBtn.classList.remove('active');
    multiplicationModeBtn.classList.remove('active');
    countingModeBtn.classList.remove('active');
    clockModeBtn.classList.remove('active');
    frenchWordsModeBtn.classList.remove('active');
    frenchNumbersModeBtn.classList.remove('active');
    frenchColorsModeBtn.classList.remove('active');
    frenchPhrasesModeBtn.classList.remove('active');
    frenchDaysModeBtn.classList.remove('active');
    pianoModeBtn.classList.remove('active');
    musicQuizModeBtn.classList.remove('active');
    melodiesModeBtn.classList.remove('active');
    recorderModeBtn.classList.remove('active');
    
    // English modes
    if (mode === 'reading') {
        readingGame.classList.add('active');
        readingModeBtn.classList.add('active');
    } else if (mode === 'spelling') {
        spellingGame.classList.add('active');
        spellingModeBtn.classList.add('active');
    } else if (mode === 'sentence') {
        sentenceGame.classList.add('active');
        sentenceModeBtn.classList.add('active');
    } else if (mode === 'comprehension') {
        comprehensionGame.classList.add('active');
        comprehensionModeBtn.classList.add('active');
    } else if (mode === 'rhyming') {
        rhymingGame.classList.add('active');
        rhymingModeBtn.classList.add('active');
    } else if (mode === 'digraphs') {
        digraphsGame.classList.add('active');
        digraphsModeBtn.classList.add('active');
    } 
    // Math modes
    else if (mode === 'addition' || mode === 'subtraction' || mode === 'multiplication' || mode === 'counting') {
        mathGame.classList.add('active');
        if (mode === 'addition') additionModeBtn.classList.add('active');
        else if (mode === 'subtraction') subtractionModeBtn.classList.add('active');
        else if (mode === 'multiplication') multiplicationModeBtn.classList.add('active');
        else if (mode === 'counting') countingModeBtn.classList.add('active');
    }
    // Clock mode
    else if (mode === 'clock') {
        clockGame.classList.add('active');
        clockModeBtn.classList.add('active');
    }
    // French modes
    else if (mode === 'words' || mode === 'numbers' || mode === 'colors' || mode === 'phrases' || mode === 'days') {
        frenchGame.classList.add('active');
        if (mode === 'words') frenchWordsModeBtn.classList.add('active');
        else if (mode === 'numbers') frenchNumbersModeBtn.classList.add('active');
        else if (mode === 'colors') frenchColorsModeBtn.classList.add('active');
        else if (mode === 'phrases') frenchPhrasesModeBtn.classList.add('active');
        else if (mode === 'days') frenchDaysModeBtn.classList.add('active');
    }
    // Music modes
    else if (mode === 'piano') {
        pianoGame.classList.add('active');
        pianoModeBtn.classList.add('active');
        initPianoMode();
    } else if (mode === 'musicQuiz') {
        musicQuizGame.classList.add('active');
        musicQuizModeBtn.classList.add('active');
        loadMusicQuiz();
    } else if (mode === 'melodies') {
        melodiesGame.classList.add('active');
        melodiesModeBtn.classList.add('active');
        loadMelody();
    } else if (mode === 'recorder') {
        recorderGame.classList.add('active');
        recorderModeBtn.classList.add('active');
        loadRecorderQuiz();
    }
    
    hideFeedback();
    nextBtn.classList.add('hidden');
    if (currentSubject !== 'music') {
        loadNewWord();
    }
}

// Switch between word and sentence reading
function switchReadingType(type) {
    readingType = type;
    
    if (type === 'word') {
        wordReadingBtn.classList.add('active');
        sentenceReadingBtn.classList.remove('active');
    } else {
        sentenceReadingBtn.classList.add('active');
        wordReadingBtn.classList.remove('active');
    }
    
    hideFeedback();
    nextBtn.classList.add('hidden');
    loadNewWord();
}

// Get a random word that hasn't been used recently
function getRandomWord() {
    // Reset used words if we've gone through all of them
    if (usedWords.size >= allWords.length) {
        usedWords.clear();
    }
    
    let word;
    do {
        word = allWords[Math.floor(Math.random() * allWords.length)];
    } while (usedWords.has(word.word));
    
    // Determine difficulty based on which database the word came from
    if (wordDatabase.easy.some(w => w.word === word.word)) {
        currentDifficulty = 'easy';
    } else if (wordDatabase.medium.some(w => w.word === word.word)) {
        currentDifficulty = 'medium';
    } else {
        currentDifficulty = 'hard';
    }
    
    usedWords.add(word.word);
    return word;
}

// Load a new word
function loadNewWord() {
    hideFeedback();
    nextBtn.classList.add('hidden');
    
    if (currentMode === 'reading') {
        if (readingType === 'word') {
            currentWord = getRandomWord();
            loadReadingMode();
        } else {
            currentReadingSentence = getRandomReadingSentence();
            loadReadingSentenceMode();
        }
    } else if (currentMode === 'spelling') {
        currentWord = getRandomWord();
        loadSpellingMode();
    } else if (currentMode === 'sentence') {
        currentSentence = getRandomSentence();
        loadSentenceMode();
    } else if (currentMode === 'comprehension') {
        currentComprehension = getRandomComprehension();
        currentComprehensionQuestionIndex = 0;
        loadComprehensionMode();
    } else if (currentMode === 'rhyming') {
        currentRhymingWord = getRandomRhymingWord();
        selectedRhymes = new Set();
        loadRhymingMode();
    } else if (currentMode === 'digraphs') {
        currentDigraph = getRandomDigraph();
        loadDigraphsMode();
    } else if (currentMode === 'addition' || currentMode === 'subtraction' || currentMode === 'multiplication') {
        currentMathProblem = getRandomMathProblem(currentMode);
        loadMathMode();
    } else if (currentMode === 'counting') {
        currentMathProblem = getRandomCountingProblem();
        loadCountingMode();
    } else if (currentMode === 'clock') {
        currentClockTime = getRandomClockTime();
        loadClockMode();
    } else if (currentMode === 'words' || currentMode === 'numbers' || currentMode === 'colors' || currentMode === 'phrases' || currentMode === 'days') {
        currentFrenchItem = getRandomFrenchItem(currentMode);
        loadFrenchMode();
    }
}

// Get a random sentence
function getRandomSentence() {
    if (usedSentences.size >= allSentences.length) {
        usedSentences.clear();
    }
    
    let sentence;
    do {
        sentence = allSentences[Math.floor(Math.random() * allSentences.length)];
    } while (usedSentences.has(sentence.sentence));
    
    usedSentences.add(sentence.sentence);
    return sentence;
}

// Get a random reading sentence
function getRandomReadingSentence() {
    if (usedReadingSentences.size >= allReadingSentences.length) {
        usedReadingSentences.clear();
    }
    
    let sentence;
    do {
        sentence = allReadingSentences[Math.floor(Math.random() * allReadingSentences.length)];
    } while (usedReadingSentences.has(sentence.sentence));
    
    usedReadingSentences.add(sentence.sentence);
    return sentence;
}

// Get a random comprehension passage
function getRandomComprehension() {
    if (usedComprehensions.size >= allComprehensions.length) {
        usedComprehensions.clear();
    }
    
    let comprehension;
    do {
        comprehension = allComprehensions[Math.floor(Math.random() * allComprehensions.length)];
    } while (usedComprehensions.has(comprehension.passage));
    
    usedComprehensions.add(comprehension.passage);
    return comprehension;
}

// Load comprehension mode
function loadComprehensionMode() {
    passageTextEl.textContent = currentComprehension.passage;
    comprehensionIconEl.textContent = currentComprehension.emoji;
    loadComprehensionQuestion();
}

// Load current comprehension question
function loadComprehensionQuestion() {
    const currentQuestion = currentComprehension.questions[currentComprehensionQuestionIndex];
    comprehensionQuestionTitleEl.textContent = `Question ${currentComprehensionQuestionIndex + 1} of ${currentComprehension.questions.length}:`;
    comprehensionQuestionTextEl.textContent = currentQuestion.question;
    
    // Shuffle options
    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);
    
    comprehensionOptionsEl.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkComprehensionAnswer(option, btn, currentQuestion.answer));
        comprehensionOptionsEl.appendChild(btn);
    });
}

// Check comprehension answer
function checkComprehensionAnswer(selected, btn, correctAnswer) {
    const buttons = comprehensionOptionsEl.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === correctAnswer) {
        btn.classList.add('correct');
        showFeedback(true, 'Excellent! That\'s the correct answer! 🎉');
        updateScore(15);
        streak++;
        correctAnswers++;
        stars += 2;
        
        // Award building blocks based on difficulty
        awardBuildingResources(currentDifficulty);
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(b => {
            if (b.textContent === correctAnswer) {
                b.classList.add('correct');
            }
        });
        showFeedback(false, `Good try! The correct answer is "${correctAnswer}". Keep reading! 💪`);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    
    // Check if there are more questions
    currentComprehensionQuestionIndex++;
    if (currentComprehensionQuestionIndex < currentComprehension.questions.length) {
        setTimeout(() => {
            hideFeedback();
            loadComprehensionQuestion();
        }, 2000);
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// Pronounce comprehension passage
function pronounceComprehension() {
    const executeAudio = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentComprehension.passage);
            utterance.rate = 0.7;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            if (englishVoice) utterance.voice = englishVoice;
            
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
            
            comprehensionPronounceBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                comprehensionPronounceBtn.style.transform = 'scale(1)';
            }, 300);
        }
    };
    
    showPasscodeModal(executeAudio);
}

// Get a random rhyming word
function getRandomRhymingWord() {
    if (usedRhymingWords.size >= allRhymingWords.length) {
        usedRhymingWords.clear();
    }
    
    let rhymingWord;
    do {
        rhymingWord = allRhymingWords[Math.floor(Math.random() * allRhymingWords.length)];
    } while (usedRhymingWords.has(rhymingWord.word));
    
    usedRhymingWords.add(rhymingWord.word);
    return rhymingWord;
}

// Get a random digraph word
function getRandomDigraph() {
    if (usedDigraphs.size >= allDigraphs.length) {
        usedDigraphs.clear();
    }
    
    let digraphWord;
    do {
        digraphWord = allDigraphs[Math.floor(Math.random() * allDigraphs.length)];
    } while (usedDigraphs.has(digraphWord.word));
    
    usedDigraphs.add(digraphWord.word);
    return digraphWord;
}

// Get random math problem
function getRandomMathProblem(operation) {
    const levelKey = level <= 3 ? 'easy' : level <= 6 ? 'medium' : 'hard';
    const problems = mathDatabase[operation][levelKey];
    
    if (usedMathProblems.size >= problems.length) {
        usedMathProblems.clear();
    }
    
    let problem;
    do {
        problem = problems[Math.floor(Math.random() * problems.length)];
    } while (usedMathProblems.has(problem.problem));
    
    usedMathProblems.add(problem.problem);
    return problem;
}

// Get random counting problem
function getRandomCountingProblem() {
    if (usedMathProblems.size >= mathDatabase.counting.length) {
        usedMathProblems.clear();
    }
    
    let problem;
    do {
        problem = mathDatabase.counting[Math.floor(Math.random() * mathDatabase.counting.length)];
    } while (usedMathProblems.has(problem.question));
    
    usedMathProblems.add(problem.question);
    return problem;
}

// Get random clock time
function getRandomClockTime() {
    return mathDatabase.clock[Math.floor(Math.random() * mathDatabase.clock.length)];
}

// Get random French item
function getRandomFrenchItem(mode) {
    let items;
    
    if (mode === 'words') {
        const levelKey = level <= 3 ? 'easy' : level <= 6 ? 'medium' : 'hard';
        items = frenchDatabase.words[levelKey];
    } else if (mode === 'numbers') {
        items = frenchDatabase.numbers;
    } else if (mode === 'colors') {
        items = frenchDatabase.colors;
    } else if (mode === 'phrases') {
        items = frenchDatabase.phrases;
    } else if (mode === 'days') {
        items = frenchDatabase.days;
    }
    
    if (usedFrenchItems.size >= items.length) {
        usedFrenchItems.clear();
    }
    
    let item;
    do {
        item = items[Math.floor(Math.random() * items.length)];
    } while (usedFrenchItems.has(JSON.stringify(item)));
    
    usedFrenchItems.add(JSON.stringify(item));
    return item;
}

// Load rhyming mode
function loadRhymingMode() {
    targetWordEl.textContent = currentRhymingWord.word;
    
    // Combine rhymes and non-rhymes, then shuffle
    const numRhymes = Math.min(3, currentRhymingWord.rhymes.length);
    const numNonRhymes = 3;
    
    const selectedRhymeWords = currentRhymingWord.rhymes.slice(0, numRhymes);
    const selectedNonRhymes = currentRhymingWord.nonRhymes.slice(0, numNonRhymes);
    const allOptions = [...selectedRhymeWords, ...selectedNonRhymes].sort(() => Math.random() - 0.5);
    
    rhymingOptionsEl.innerHTML = '';
    allOptions.forEach(option => {
        const container = document.createElement('div');
        container.className = 'rhyme-option-container';
        
        const btn = document.createElement('button');
        btn.className = 'rhyme-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => toggleRhymeSelection(option, btn));
        
        const audioBtn = document.createElement('button');
        audioBtn.className = 'rhyme-audio-btn';
        audioBtn.textContent = '🔊';
        audioBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            pronounceRhymeOption(option);
        });
        
        container.appendChild(btn);
        container.appendChild(audioBtn);
        rhymingOptionsEl.appendChild(container);
    });
    
    checkRhymingBtn.disabled = false;
}

// Toggle rhyme selection
function toggleRhymeSelection(word, btn) {
    if (selectedRhymes.has(word)) {
        selectedRhymes.delete(word);
        btn.classList.remove('selected');
    } else {
        selectedRhymes.add(word);
        btn.classList.add('selected');
    }
}

// Check rhyming answers
function checkRhyming() {
    const buttons = rhymingOptionsEl.querySelectorAll('.rhyme-option-btn');
    buttons.forEach(btn => btn.disabled = true);
    checkRhymingBtn.disabled = true;
    
    let correct = true;
    let correctCount = 0;
    const totalRhymes = currentRhymingWord.rhymes.filter(r => 
        Array.from(buttons).some(b => b.textContent === r)
    ).length;
    
    buttons.forEach(btn => {
        const word = btn.textContent;
        const isRhyme = currentRhymingWord.rhymes.includes(word);
        const wasSelected = selectedRhymes.has(word);
        
        if (isRhyme && wasSelected) {
            btn.classList.add('correct');
            correctCount++;
        } else if (isRhyme && !wasSelected) {
            btn.classList.add('missed');
            correct = false;
        } else if (!isRhyme && wasSelected) {
            btn.classList.add('incorrect');
            correct = false;
        }
    });
    
    if (correct && correctCount === totalRhymes) {
        showFeedback(true, '🎉 Perfect! You found all the rhyming words!');
        updateScore(20);
        streak++;
        correctAnswers++;
        stars += 3;
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        const message = correctCount > 0 
            ? `Good try! You found ${correctCount} out of ${totalRhymes} rhyming words. 💪`
            : 'Oops! Try to listen carefully to the sounds. 💪';
        showFeedback(false, message);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
}

// Pronounce target word
function pronounceTargetWord() {
    const executeAudio = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentRhymingWord.word);
            utterance.rate = 0.7;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            if (englishVoice) utterance.voice = englishVoice;
            
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
            
            targetPronounceBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                targetPronounceBtn.style.transform = 'scale(1)';
            }, 300);
        }
    };
    
    showPasscodeModal(executeAudio);
}

// Pronounce rhyme option
function pronounceRhymeOption(word) {
    const executeAudio = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.rate = 0.7;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            if (englishVoice) utterance.voice = englishVoice;
            
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        }
    };
    
    showPasscodeModal(executeAudio);
}

// Load Digraphs mode
function loadDigraphsMode() {
    digraphWordEl.textContent = currentDigraph.word;
    digraphEmojiEl.textContent = currentDigraph.emoji;
    
    // Generate options - correct digraph + 3 incorrect options
    const options = [currentDigraph.digraph, ...currentDigraph.otherDigraphs];
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    
    digraphOptionsEl.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'digraph-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkDigraphAnswer(option, btn));
        digraphOptionsEl.appendChild(btn);
    });
    
    // Pronounce button
    digraphPronounceBtn.onclick = pronounceDigraphWord;
}

// Check digraph answer
function checkDigraphAnswer(selected, btn) {
    const buttons = digraphOptionsEl.querySelectorAll('.digraph-option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === currentDigraph.digraph) {
        btn.classList.add('correct');
        showFeedback(true, `🎉 Perfect! "${currentDigraph.word}" has the "${currentDigraph.digraph}" sound!`);
        updateScore(10);
        awardBuildingResources(currentDifficulty || 'easy');
        questionsCompleted++;
        setTimeout(() => {
            nextBtn.classList.remove('hidden');
        }, 1500);
    } else {
        btn.classList.add('incorrect');
        // Highlight the correct answer
        buttons.forEach(b => {
            if (b.textContent === currentDigraph.digraph) {
                b.classList.add('correct');
            }
        });
        showFeedback(false, `Not quite! "${currentDigraph.word}" has the "${currentDigraph.digraph}" sound. ${currentDigraph.description}`);
        streak = 0;
        updateScoreDisplay();
    }
}

// Pronounce digraph word
function pronounceDigraphWord() {
    const executeAudio = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentDigraph.word);
            utterance.rate = 0.7;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            if (englishVoice) utterance.voice = englishVoice;
            
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
            
            digraphPronounceBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                digraphPronounceBtn.style.transform = 'scale(1)';
            }, 300);
        }
    };
    
    showPasscodeModal(executeAudio);
}

// Load Math mode
function loadMathMode() {
    mathEquationEl.textContent = currentMathProblem.problem + ' = ?';
    
    // Display visual representation
    const visualCount = currentMathProblem.visual;
    mathVisualEl.innerHTML = '';
    for (let i = 0; i < visualCount; i++) {
        mathVisualEl.innerHTML += currentMathProblem.emoji + ' ';
    }
    
    // Shuffle options
    const shuffledOptions = [...currentMathProblem.options].sort(() => Math.random() - 0.5);
    
    mathOptionsEl.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkMathAnswer(option, btn));
        mathOptionsEl.appendChild(btn);
    });
}

// Load Counting mode
function loadCountingMode() {
    mathEquationEl.textContent = currentMathProblem.question;
    
    // Display objects to count
    mathVisualEl.innerHTML = '';
    for (let i = 0; i < currentMathProblem.count; i++) {
        mathVisualEl.innerHTML += currentMathProblem.emoji + ' ';
    }
    
    // Shuffle options
    const shuffledOptions = [...currentMathProblem.options].sort(() => Math.random() - 0.5);
    
    mathOptionsEl.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkCountingAnswer(option, btn));
        mathOptionsEl.appendChild(btn);
    });
}

// Load Clock mode
function loadClockMode() {
    // Set clock hands to show the time
    setClockHands(currentClockTime.hour, currentClockTime.minute);
    
    // Shuffle options
    const shuffledOptions = [...currentClockTime.options].sort(() => Math.random() - 0.5);
    
    clockOptionsEl.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkClockAnswer(option, btn));
        clockOptionsEl.appendChild(btn);
    });
}

// Set clock hands to display time
function setClockHands(hour, minute) {
    // Calculate angles
    const minuteAngle = (minute / 60) * 360;
    const hourAngle = ((hour % 12) / 12) * 360 + (minute / 60) * 30;
    
    // Apply rotation to hands
    hourHandEl.style.transform = `rotate(${hourAngle}deg)`;
    hourHandEl.style.transformOrigin = '100px 100px';
    
    minuteHandEl.style.transform = `rotate(${minuteAngle}deg)`;
    minuteHandEl.style.transformOrigin = '100px 100px';
}

// Check Math answer
function checkMathAnswer(selected, btn) {
    const buttons = mathOptionsEl.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === currentMathProblem.answer) {
        btn.classList.add('correct');
        showFeedback(true, '🎉 Correct! Great math skills!');
        updateScore(10);
        streak++;
        correctAnswers++;
        stars++;
        playSuccessAudio();
        
        // Award building blocks based on difficulty
        awardBuildingResources(currentDifficulty);
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(b => {
            if (parseInt(b.textContent) === currentMathProblem.answer) {
                b.classList.add('correct');
            }
        });
        showFeedback(false, `Not quite! The answer is ${currentMathProblem.answer}. 💪`);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
}

// Check Counting answer
function checkCountingAnswer(selected, btn) {
    const buttons = mathOptionsEl.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === currentMathProblem.count) {
        btn.classList.add('correct');
        showFeedback(true, '🎉 Perfect counting!');
        updateScore(10);
        streak++;
        correctAnswers++;
        stars++;
        playSuccessAudio();
        
        // Award building blocks based on difficulty
        awardBuildingResources(currentDifficulty);
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(b => {
            if (parseInt(b.textContent) === currentMathProblem.count) {
                b.classList.add('correct');
            }
        });
        showFeedback(false, `Not quite! There are ${currentMathProblem.count} objects. 💪`);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
}

// Check Clock answer
function checkClockAnswer(selected, btn) {
    const buttons = clockOptionsEl.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === currentClockTime.display) {
        btn.classList.add('correct');
        showFeedback(true, '🕐 Excellent! You can tell time!');
        updateScore(10);
        streak++;
        correctAnswers++;
        stars++;
        playSuccessAudio();
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(b => {
            if (b.textContent === currentClockTime.display) {
                b.classList.add('correct');
            }
        });
        showFeedback(false, `Not quite! The time is ${currentClockTime.display}. 💪`);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
}

// Load French mode
function loadFrenchMode() {
    if (currentMode === 'words') {
        frenchWordDisplayEl.textContent = currentFrenchItem.emoji || '📖';
        frenchEnglishEl.textContent = `English: ${currentFrenchItem.english}`;
        frenchEnglishEl.style.display = 'block';
        
        const shuffledOptions = [...currentFrenchItem.options].sort(() => Math.random() - 0.5);
        frenchOptionsEl.innerHTML = '';
        shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => checkFrenchAnswer(option, btn));
            frenchOptionsEl.appendChild(btn);
        });
    } else if (currentMode === 'numbers') {
        frenchWordDisplayEl.textContent = currentFrenchItem.number;
        frenchEnglishEl.textContent = 'What is this number in French?';
        frenchEnglishEl.style.display = 'block';
        
        const shuffledOptions = [...currentFrenchItem.options].sort(() => Math.random() - 0.5);
        frenchOptionsEl.innerHTML = '';
        shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => checkFrenchAnswer(option, btn));
            frenchOptionsEl.appendChild(btn);
        });
    } else if (currentMode === 'colors') {
        frenchWordDisplayEl.textContent = currentFrenchItem.emoji;
        frenchEnglishEl.textContent = `English: ${currentFrenchItem.color}`;
        frenchEnglishEl.style.display = 'block';
        
        const shuffledOptions = [...currentFrenchItem.options].sort(() => Math.random() - 0.5);
        frenchOptionsEl.innerHTML = '';
        shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => checkFrenchAnswer(option, btn));
            frenchOptionsEl.appendChild(btn);
        });
    } else if (currentMode === 'phrases') {
        frenchWordDisplayEl.textContent = '💬';
        frenchEnglishEl.textContent = `English: ${currentFrenchItem.english}`;
        frenchEnglishEl.style.display = 'block';
        
        const shuffledOptions = [...currentFrenchItem.options].sort(() => Math.random() - 0.5);
        frenchOptionsEl.innerHTML = '';
        shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => checkFrenchAnswer(option, btn));
            frenchOptionsEl.appendChild(btn);
        });
    } else if (currentMode === 'days') {
        frenchWordDisplayEl.textContent = currentFrenchItem.emoji;
        frenchEnglishEl.textContent = `English: ${currentFrenchItem.day}`;
        frenchEnglishEl.style.display = 'block';
        
        const shuffledOptions = [...currentFrenchItem.options].sort(() => Math.random() - 0.5);
        frenchOptionsEl.innerHTML = '';
        shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => checkFrenchAnswer(option, btn));
            frenchOptionsEl.appendChild(btn);
        });
    }
}

// Check French answer
function checkFrenchAnswer(selected, btn) {
    const buttons = frenchOptionsEl.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    const correctAnswer = currentFrenchItem.french;
    
    if (selected === correctAnswer) {
        btn.classList.add('correct');
        showFeedback(true, '🎉 Très bien! (Very good!)');
        updateScore(10);
        streak++;
        correctAnswers++;
        stars++;
        playSuccessAudio();
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(b => {
            if (b.textContent === correctAnswer) {
                b.classList.add('correct');
            }
        });
        showFeedback(false, `Not quite! The answer is "${correctAnswer}". 💪`);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
}

// Pronounce French word without passcode
function pronounceFrench() {
    if ('speechSynthesis' in window) {
        let textToSpeak = '';
        if (currentMode === 'words') {
            textToSpeak = currentFrenchItem.french;
        } else if (currentMode === 'numbers') {
            textToSpeak = currentFrenchItem.french;
        } else if (currentMode === 'colors') {
            textToSpeak = currentFrenchItem.french;
        } else if (currentMode === 'phrases') {
            textToSpeak = currentFrenchItem.french;
        } else if (currentMode === 'days') {
            textToSpeak = currentFrenchItem.french;
        }
        
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        utterance.volume = 1;
        if (frenchVoice) utterance.voice = frenchVoice;
        
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
        
        frenchPronounceBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            frenchPronounceBtn.style.transform = 'scale(1)';
        }, 300);
    }
}

// Load reading mode
function loadReadingMode() {
    currentWordEl.textContent = '';
    currentWordEl.style.display = 'none';
    wordImageEl.textContent = currentWord.emoji;
    wordImageEl.parentElement.style.display = 'flex';
    sentenceReadingDisplayEl.classList.remove('active');
    readingQuestionEl.textContent = 'What word matches this picture?';
    pronounceBtn.textContent = '🔊 Hear Word';
    
    // Shuffle options
    const shuffledOptions = [...currentWord.options].sort(() => Math.random() - 0.5);
    
    readingOptionsEl.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkReadingAnswer(option, btn, currentWord.word));
        readingOptionsEl.appendChild(btn);
    });
}

// Load reading sentence mode
function loadReadingSentenceMode() {
    currentWordEl.style.display = 'none';
    wordImageEl.parentElement.style.display = 'none';
    sentenceReadingDisplayEl.classList.add('active');
    sentenceReadingDisplayEl.innerHTML = `<div style="margin-bottom: 15px; font-size: 1em; color: #667eea;">${currentReadingSentence.sentence}</div><div style="font-size: 0.8em; color: #666; font-style: italic;">${currentReadingSentence.question}</div>`;
    readingQuestionEl.textContent = 'Choose the correct answer:';
    pronounceBtn.textContent = '🔊 Hear Sentence';
    
    // Shuffle options
    const shuffledOptions = [...currentReadingSentence.options].sort(() => Math.random() - 0.5);
    
    readingOptionsEl.innerHTML = '';
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkReadingAnswer(option, btn, currentReadingSentence.options[0]));
        readingOptionsEl.appendChild(btn);
    });
}

// Load spelling mode
function loadSpellingMode() {
    spellingImageEl.textContent = currentWord.emoji;
    spellingInput.value = '';
    spellingInput.focus();
    
    // Enable all letter buttons
    const letterBtns = letterButtonsEl.querySelectorAll('.letter-btn');
    letterBtns.forEach(btn => btn.disabled = false);
}

// Load sentence mode
function loadSentenceMode() {
    sentenceImageEl.textContent = currentSentence.emoji;
    userSentence = [];
    sentenceDisplayEl.innerHTML = '<p style="color: #999;">Click words below to build the sentence...</p>';
    
    // Shuffle words and create word bank
    const shuffledWords = [...currentSentence.words].sort(() => Math.random() - 0.5);
    wordBankEl.innerHTML = '';
    
    shuffledWords.forEach((word, index) => {
        const tile = document.createElement('div');
        tile.className = 'word-tile';
        tile.textContent = word;
        tile.dataset.word = word;
        tile.dataset.index = index;
        
        tile.addEventListener('click', () => addWordToSentence(word, tile));
        wordBankEl.appendChild(tile);
    });
    
    checkSentenceBtn.disabled = false;
}

// Add word to sentence
function addWordToSentence(word, tile) {
    if (tile.classList.contains('placed')) {
        // Remove from sentence
        const index = userSentence.indexOf(word);
        if (index > -1) {
            userSentence.splice(index, 1);
        }
        tile.classList.remove('placed');
    } else {
        // Add to sentence
        userSentence.push(word);
        tile.classList.add('placed');
    }
    
    // Update display
    if (userSentence.length > 0) {
        sentenceDisplayEl.innerHTML = userSentence.map(w => 
            `<span class="word-tile placed">${w}</span>`
        ).join(' ');
    } else {
        sentenceDisplayEl.innerHTML = '<p style="color: #999;">Click words below to build the sentence...</p>';
    }
}

// Check sentence
function checkSentence() {
    const tiles = wordBankEl.querySelectorAll('.word-tile');
    tiles.forEach(tile => tile.style.pointerEvents = 'none');
    checkSentenceBtn.disabled = true;
    
    const userSentenceStr = userSentence.join(' ');
    const correctSentenceStr = currentSentence.sentence;
    
    if (userSentenceStr === correctSentenceStr) {
        tiles.forEach(tile => {
            if (tile.classList.contains('placed')) {
                tile.classList.add('correct');
            }
        });
        showFeedback(true, '🎉 Perfect! You built the sentence correctly!');
        updateScore(25);
        streak++;
        correctAnswers++;
        sentencesCompleted++;
        stars += 2;
        
        checkAchievement('sentence_master');
    } else {
        tiles.forEach(tile => {
            if (tile.classList.contains('placed')) {
                tile.classList.add('incorrect');
            }
        });
        showFeedback(false, `Good try! The correct sentence is: "${correctSentenceStr}"`);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
    
    setTimeout(() => {
        tiles.forEach(tile => {
            tile.style.pointerEvents = 'auto';
            tile.classList.remove('correct', 'incorrect');
        });
    }, 2000);
}

// Pronounce sentence
function pronounceSentence() {
    const executeAudio = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentSentence.sentence);
            utterance.rate = 0.7;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
            
            sentencePronounceBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                sentencePronounceBtn.style.transform = 'scale(1)';
            }, 300);
        }
    };
    
    showPasscodeModal(executeAudio);
}

// Check reading answer
// Check reading answer
function checkReadingAnswer(selected, btn, correctAnswer) {
    console.log('checkReadingAnswer called:', { selected, correctAnswer, readingType });
    const buttons = readingOptionsEl.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === correctAnswer) {
        btn.classList.add('correct');
        const pointValue = readingType === 'sentence' ? 20 : 10;
        showFeedback(true, 'Awesome! That\'s correct! 🎉');
        updateScore(pointValue);
        streak++;
        correctAnswers++;
        stars += readingType === 'sentence' ? 2 : 1;
        
        // Award building blocks based on difficulty
        awardBuildingResources(currentDifficulty);
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        btn.classList.add('incorrect');
        // Highlight the correct answer
        buttons.forEach(b => {
            if (b.textContent === correctAnswer) {
                b.classList.add('correct');
            }
        });
        const correctText = readingType === 'sentence' ? correctAnswer : `"${correctAnswer}"`;
        showFeedback(false, `Oops! The correct answer is ${correctText}. Try again! 💪`);
        streak = 0;
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    console.log('Showing next button, nextBtn element:', nextBtn);
    nextBtn.classList.remove('hidden');
    console.log('Next button classes after remove:', nextBtn.className);
}

// Check spelling
function checkSpelling() {
    const userInput = spellingInput.value.trim().toLowerCase();
    
    if (!userInput) {
        return;
    }
    
    const letterBtns = letterButtonsEl.querySelectorAll('.letter-btn');
    letterBtns.forEach(btn => btn.disabled = true);
    spellingInput.disabled = true;
    checkSpellingBtn.disabled = true;
    
    if (userInput === currentWord.word) {
        showFeedback(true, 'Perfect spelling! You\'re amazing! 🌟');
        updateScore(15);
        streak++;
        correctAnswers++;
        stars++;
        spellingInput.style.borderColor = '#4caf50';
        spellingInput.style.background = '#e8f5e9';
        
        // Award building blocks based on difficulty
        awardBuildingResources(currentDifficulty);
        
        if (questionsCompleted === 0) {
            checkAchievement('first_word');
        }
    } else {
        showFeedback(false, `Good try! The correct spelling is "${currentWord.word}". Keep practicing! 🎯`);
        streak = 0;
        spellingInput.style.borderColor = '#f44336';
        spellingInput.style.background = '#ffebee';
    }
    
    questionsCompleted++;
    updateScoreDisplay();
    nextBtn.classList.remove('hidden');
    
    setTimeout(() => {
        spellingInput.disabled = false;
        checkSpellingBtn.disabled = false;
        spellingInput.style.borderColor = '#667eea';
        spellingInput.style.background = 'white';
    }, 2000);
}

// Create letter buttons
function createLetterButtons() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    letterButtonsEl.innerHTML = '';
    alphabet.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.textContent = letter.toUpperCase();
        btn.addEventListener('click', () => {
            spellingInput.value += letter;
            spellingInput.focus();
        });
        letterButtonsEl.appendChild(btn);
    });
}

// Pronounce word using Web Speech API
function pronounceWord() {
    const executeAudio = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentWord.word);
            utterance.rate = 0.8; // Slightly slower for clarity
            utterance.pitch = 1.2; // Slightly higher pitch for friendliness
            utterance.volume = 1;
            if (englishVoice) utterance.voice = englishVoice;
            
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();
            
            // Speak the word
            window.speechSynthesis.speak(utterance);
            
            // Visual feedback
            const btn = spellingPronounceBtn;
            btn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 300);
        } else {
            alert('Sorry, your browser doesn\'t support text-to-speech!');
        }
    };
    
    showPasscodeModal(executeAudio);
}

// Pronounce current content (word or sentence) in reading mode
function pronounceCurrentContent() {
    const executeAudio = () => {
        if ('speechSynthesis' in window) {
            let text;
            if (readingType === 'word') {
                text = currentWord.word;
            } else {
                text = currentReadingSentence.sentence;
            }
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            if (englishVoice) utterance.voice = englishVoice;
            
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
            
            pronounceBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                pronounceBtn.style.transform = 'scale(1)';
            }, 300);
        } else {
            alert('Sorry, your browser doesn\'t support text-to-speech!');
        }
    };
    
    showPasscodeModal(executeAudio);
}

// Get verbal affirmation based on streak
function getVerbalAffirmation() {
    // Check if we're in French mode
    const isFrenchMode = (currentSubject === 'french');
    
    const basicAffirmations = isFrenchMode ? [
        "Très bien!",
        "Bon travail!",
        "Excellent!",
        "Magnifique!",
        "Fantastique!",
        "Bravo!",
        "Parfait!",
        "Super!"
    ] : [
        "Great job!",
        "Well done!",
        "Excellent!",
        "Awesome!",
        "Fantastic!",
        "You're doing great!",
        "Perfect!",
        "Amazing!"
    ];
    
    const streakAffirmations = isFrenchMode ? [
        "Tu es en feu!",
        "Continue comme ça!",
        "Imbattable!",
        "Tu es une superstar!",
        "Incroyable!",
        "Exceptionnel!",
        "Formidable!",
        "Génial!",
        "Brillant!",
        "Tu es un champion!"
    ] : [
        "You're on fire!",
        "Keep it up!",
        "Unstoppable!",
        "You're a superstar!",
        "Incredible streak!",
        "Outstanding!",
        "You're crushing it!",
        "Phenomenal!",
        "Brilliant work!",
        "You're a champion!"
    ];
    
    if (streak >= 3) {
        return streakAffirmations[Math.floor(Math.random() * streakAffirmations.length)];
    } else {
        return basicAffirmations[Math.floor(Math.random() * basicAffirmations.length)];
    }
}

// Direct audio playback without passcode (for success feedback)
function playSuccessAudio() {
    if ('speechSynthesis' in window) {
        let text = '';
        let lang = 'en-US';
        const affirmation = getVerbalAffirmation();
        
        if (currentMode === 'reading') {
            const word = readingType === 'word' ? currentWord.word : currentReadingSentence.sentence;
            text = `${word}. ${affirmation}`;
        } else if (currentMode === 'spelling') {
            text = `${currentWord.word}. ${affirmation}`;
        } else if (currentMode === 'comprehension') {
            const currentQuestion = currentComprehension.questions[currentComprehensionQuestionIndex - 1];
            const answer = currentQuestion ? currentQuestion.answer : '';
            text = `${answer}. ${affirmation}`;
        } else if (currentMode === 'addition' || currentMode === 'subtraction' || currentMode === 'multiplication') {
            text = `The answer is ${currentMathProblem.answer}. ${affirmation}`;
        } else if (currentMode === 'counting') {
            text = `There are ${currentMathProblem.count}. ${affirmation}`;
        } else if (currentMode === 'words' || currentMode === 'numbers' || currentMode === 'colors' || currentMode === 'phrases' || currentMode === 'days') {
            text = `${currentFrenchItem.french}. ${affirmation}`;
            lang = 'fr-FR';
        }
        
        window.speechSynthesis.cancel();
        
        if (text) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            utterance.volume = 1;
            
            // Use appropriate voice based on subject
            if (currentSubject === 'french' && frenchVoice) {
                utterance.voice = frenchVoice;
            } else if (englishVoice) {
                utterance.voice = englishVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        }
    }
}

// Show feedback
function showFeedback(isSuccess, message) {
    feedbackEl.classList.remove('hidden', 'success', 'error');
    feedbackEl.classList.add(isSuccess ? 'success' : 'error');
    
    feedbackEmojiEl.textContent = isSuccess ? '🎉' : '💪';
    feedbackTextEl.textContent = message;
    
    // Only pronounce the word if answer was correct (no passcode needed)
    if (isSuccess) {
        setTimeout(() => {
            playSuccessAudio();
        }, 500);
    }
}

// Hide feedback
function hideFeedback() {
    feedbackEl.classList.add('hidden');
}

// Update score
function updateScore(points) {
    score += points;
    xp += points;
    
    // Bonus points for streaks
    if (streak > 2) {
        const bonus = streak * 2;
        score += bonus;
        xp += bonus;
    }
    
    // Check for level up
    const xpForNextLevel = level * 100;
    if (xp >= xpForNextLevel) {
        levelUp();
    }
    
    // Update progress bar
    updateProgressBar();
    
    // Check achievements
    checkAchievement('streak_5');
    checkAchievement('score_100');
    checkAchievement('perfect_10');
    checkAchievement('star_collector');
}

// Update score display
function updateScoreDisplay() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;
    levelEl.textContent = level;
    starsEl.textContent = stars;
}

// Update progress bar
function updateProgressBar() {
    const xpForNextLevel = level * 100;
    const progress = (xp % 100) / 100 * 100;
    
    progressBarEl.style.width = progress + '%';
    progressTextEl.textContent = `${xp % 100} / 100 XP`;
}

// Level up
function levelUp() {
    level++;
    xp = xp % 100;
    
    showReward('🎊 Level Up! 🎊', `You reached Level ${level}!`, ['🌟', '⭐', '✨', '💫']);
    
    checkAchievement('level_3');
}

// Check and award achievements
function checkAchievement(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    
    if (!achievement || achievement.earned) {
        return;
    }
    
    let shouldEarn = false;
    
    switch(achievementId) {
        case 'first_word':
            shouldEarn = questionsCompleted >= 1;
            break;
        case 'streak_5':
            shouldEarn = streak >= 5;
            break;
        case 'score_100':
            shouldEarn = score >= 100;
            break;
        case 'level_3':
            shouldEarn = level >= 3;
            break;
        case 'sentence_master':
            shouldEarn = sentencesCompleted >= 5;
            break;
        case 'perfect_10':
            shouldEarn = correctAnswers >= 10 && streak >= 10;
            break;
        case 'star_collector':
            shouldEarn = stars >= 20;
            break;
    }
    
    if (shouldEarn) {
        achievement.earned = true;
        awardAchievement(achievement);
    }
}

// Award achievement
function awardAchievement(achievement) {
    // Add badge to achievements display
    const badge = document.createElement('div');
    badge.className = 'achievement-badge';
    badge.textContent = achievement.emoji;
    badge.dataset.tooltip = achievement.name;
    achievementsEl.appendChild(badge);
    
    // Show reward popup
    showReward(`${achievement.emoji} Achievement Unlocked! ${achievement.emoji}`, achievement.name, [achievement.emoji]);
    
    // Award bonus stars
    stars += 5;
    updateScoreDisplay();
}

// Show reward popup
function showReward(title, message, emojis) {
    rewardTitleEl.textContent = title;
    rewardMessageEl.textContent = message;
    
    // Cycle through emojis for animation
    let emojiIndex = 0;
    rewardAnimationEl.textContent = emojis[0];
    
    const emojiInterval = setInterval(() => {
        emojiIndex = (emojiIndex + 1) % emojis.length;
        rewardAnimationEl.textContent = emojis[emojiIndex];
    }, 300);
    
    rewardPopupEl.classList.remove('hidden');
    
    // Store interval ID to clear it later
    rewardPopupEl.dataset.intervalId = emojiInterval;
}

// Close reward popup
function closeRewardPopup() {
    const intervalId = rewardPopupEl.dataset.intervalId;
    if (intervalId) {
        clearInterval(parseInt(intervalId));
    }
    
    rewardPopupEl.classList.add('hidden');
}

// Show passcode modal
function showPasscodeModal(callback) {
    pendingAudioCallback = callback;
    passcodeModalEl.classList.remove('hidden');
    passcodeInputEl.value = '';
    passcodeErrorEl.classList.add('hidden');
    passcodeInputEl.focus();
}

// Close passcode modal
function closePasscodeModal() {
    passcodeModalEl.classList.add('hidden');
    passcodeInputEl.value = '';
    passcodeErrorEl.classList.add('hidden');
}

// Check passcode
function checkPasscode() {
    const enteredCode = passcodeInputEl.value.trim();
    
    if (enteredCode === AUDIO_PASSCODE) {
        // Store callback before closing modal
        const callback = pendingAudioCallback;
        pendingAudioCallback = null;
        
        closePasscodeModal();
        
        // Execute audio callback immediately
        if (callback) {
            callback();
        }
    } else {
        passcodeErrorEl.classList.remove('hidden');
        passcodeInputEl.value = '';
        passcodeInputEl.focus();
        
        // Shake animation
        setTimeout(() => {
            passcodeErrorEl.classList.add('hidden');
        }, 2000);
    }
}

// Update score display
function updateScoreDisplay() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;
    levelEl.textContent = level;
    starsEl.textContent = stars;
}

// ========================================
// TUG OF WAR GAME FUNCTIONS
// ========================================

// Initialize Tug of War game
function initializeTugOfWar() {
    towPlayerScore = 0;
    towComputerScore = 0;
    towRopePosition = 50;
    updateTugOfWarDisplay();
    loadTugOfWarQuestion();
}

// Get random question from any English mode
function getTugOfWarQuestion() {
    const questionTypes = ['reading', 'spelling', 'sentence', 'comprehension', 'rhyming'];
    const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    towCurrentQuestionType = randomType;
    
    switch(randomType) {
        case 'reading':
            return {
                type: 'reading',
                data: getRandomWord(),
                displayName: '📖 Reading'
            };
        case 'spelling':
            return {
                type: 'spelling',
                data: getRandomWord(),
                displayName: '✏️ Spelling'
            };
        case 'sentence':
            return {
                type: 'sentence',
                data: getRandomSentence(),
                displayName: '📝 Sentence Building'
            };
        case 'comprehension':
            const comprehension = getRandomComprehension();
            const randomQuestion = comprehension.questions[Math.floor(Math.random() * comprehension.questions.length)];
            return {
                type: 'comprehension',
                data: {
                    emoji: comprehension.emoji,
                    passage: comprehension.passage,
                    question: randomQuestion.question,
                    options: randomQuestion.options,
                    answer: randomQuestion.answer
                },
                displayName: '📚 Comprehension'
            };
        case 'rhyming':
            return {
                type: 'rhyming',
                data: getRandomRhymingWord(),
                displayName: '🎵 Rhyming'
            };
    }
}

// Load Tug of War question
function loadTugOfWarQuestion() {
    towCurrentQuestion = getTugOfWarQuestion();
    towModeDisplayEl.textContent = towCurrentQuestion.displayName;
    
    // Clear previous content
    towQuestionContentEl.innerHTML = '';
    towOptionsEl.innerHTML = '';
    
    switch(towCurrentQuestion.type) {
        case 'reading':
            loadTowReading();
            break;
        case 'spelling':
            loadTowSpelling();
            break;
        case 'sentence':
            loadTowSentence();
            break;
        case 'comprehension':
            loadTowComprehension();
            break;
        case 'rhyming':
            loadTowRhyming();
            break;
    }
}

// Load Tug of War Reading question
function loadTowReading() {
    const word = towCurrentQuestion.data;
    towQuestionContentEl.innerHTML = `
        <div class="tow-word-display">
            <div class="tow-emoji">${word.emoji}</div>
            <p class="tow-question-text">What does this word say?</p>
        </div>
    `;
    
    const shuffledOptions = [...word.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkTowAnswer(option === word.word, btn));
        towOptionsEl.appendChild(btn);
    });
}

// Load Tug of War Spelling question
function loadTowSpelling() {
    const word = towCurrentQuestion.data;
    towQuestionContentEl.innerHTML = `
        <div class="tow-word-display">
            <div class="tow-emoji">${word.emoji}</div>
            <p class="tow-question-text">How do you spell this?</p>
        </div>
    `;
    
    const shuffledOptions = [...word.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkTowAnswer(option === word.word, btn));
        towOptionsEl.appendChild(btn);
    });
}

// Load Tug of War Sentence question
function loadTowSentence() {
    const sentence = towCurrentQuestion.data;
    const shuffledWords = [...sentence.words].sort(() => Math.random() - 0.5);
    let selectedWords = [];
    
    towQuestionContentEl.innerHTML = `
        <div class="tow-word-display">
            <div class="tow-emoji">${sentence.emoji}</div>
            <p class="tow-question-text">Build the sentence:</p>
            <div class="tow-sentence-display" id="towSentenceDisplay"></div>
        </div>
    `;
    
    shuffledWords.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn tow-word-btn';
        btn.textContent = word;
        btn.addEventListener('click', () => {
            selectedWords.push(word);
            btn.disabled = true;
            btn.style.opacity = '0.5';
            document.getElementById('towSentenceDisplay').textContent = selectedWords.join(' ');
            
            if (selectedWords.length === sentence.words.length) {
                setTimeout(() => {
                    checkTowAnswer(selectedWords.join(' ') === sentence.sentence, btn);
                }, 500);
            }
        });
        towOptionsEl.appendChild(btn);
    });
}

// Load Tug of War Comprehension question
function loadTowComprehension() {
    const comprehensionData = towCurrentQuestion.data;
    towQuestionContentEl.innerHTML = `
        <div class="tow-word-display">
            <div class="tow-emoji">${comprehensionData.emoji}</div>
            <p class="tow-sentence-text">${comprehensionData.passage}</p>
            <p class="tow-question-text">${comprehensionData.question}</p>
        </div>
    `;
    
    const shuffledOptions = [...comprehensionData.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkTowAnswer(option === comprehensionData.answer, btn));
        towOptionsEl.appendChild(btn);
    });
}

// Load Tug of War Rhyming question
function loadTowRhyming() {
    const word = towCurrentQuestion.data;
    towQuestionContentEl.innerHTML = `
        <div class="tow-word-display">
            <p class="tow-question-text">Which word rhymes with:</p>
            <div class="tow-target-word">${word.word}</div>
        </div>
    `;
    
    // Mix rhyming and non-rhyming words
    const allOptions = [...word.rhymes.slice(0, 2), ...word.nonRhymes.slice(0, 2)];
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkTowAnswer(word.rhymes.includes(option), btn));
        towOptionsEl.appendChild(btn);
    });
}

// Check Tug of War answer
function checkTowAnswer(isCorrect, btn) {
    const buttons = towOptionsEl.querySelectorAll('.tow-option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (isCorrect) {
        btn.classList.add('correct');
        towPlayerScore++;
        towRopePosition += 10; // Player pulls rope
        towStatusEl.textContent = '🎉 Correct! You pulled the rope!';
        towStatusEl.style.color = '#4caf50';
        
        // Award building blocks based on difficulty
        awardBuildingResources(currentDifficulty);
    } else {
        btn.classList.add('incorrect');
        towStatusEl.textContent = '💪 Computer wins this round!';
        towStatusEl.style.color = '#f44336';
        
        // Computer gets a turn (automatic win for this round)
        setTimeout(() => {
            towComputerScore++;
            towRopePosition -= 10; // Computer pulls rope
            updateTugOfWarDisplay();
        }, 1000);
    }
    
    updateTugOfWarDisplay();
    
    // Check for game over
    setTimeout(() => {
        if (towPlayerScore >= towRoundsToWin) {
            showTowGameOver(true);
        } else if (towComputerScore >= towRoundsToWin) {
            showTowGameOver(false);
        } else {
            loadTugOfWarQuestion();
        }
    }, 2000);
}

// Update Tug of War display
function updateTugOfWarDisplay() {
    playerScoreEl.textContent = towPlayerScore;
    computerScoreEl.textContent = towComputerScore;
    
    // Update rope position (flag position)
    towFlagEl.style.left = `${towRopePosition}%`;
    
    // Update rope color based on who's winning
    if (towRopePosition > 60) {
        towFlagEl.style.color = '#4caf50'; // Player winning
    } else if (towRopePosition < 40) {
        towFlagEl.style.color = '#f44336'; // Computer winning
    } else {
        towFlagEl.style.color = '#ffd700'; // Neutral
    }
}

// Show Tug of War game over
function showTowGameOver(playerWon) {
    towQuestionContentEl.innerHTML = `
        <div class="tow-game-over">
            <h2>${playerWon ? '🎉 YOU WON!' : '😢 Computer Won!'}</h2>
            <p>${playerWon ? 'Amazing job! You pulled the rope all the way!' : 'Don\'t worry! Try again and you\'ll win!'}</p>
            <button class="tow-replay-btn" id="towReplayBtn">Play Again 🔄</button>
        </div>
    `;
    towOptionsEl.innerHTML = '';
    towStatusEl.textContent = playerWon ? 'Victory! 🏆' : 'Keep practicing! 💪';
    
    document.getElementById('towReplayBtn').addEventListener('click', initializeTugOfWar);
}

// ============================================
// TWO PLAYER TUG OF WAR FUNCTIONS
// ============================================

// Initialize Two Player Tug of War
function initializeTwoPlayerTugOfWar() {
    // Reset game state
    player1Score = 0;
    player2Score = 0;
    twoPlayerRopePosition = 50;
    currentRound = 1;
    player1CurrentQuestion = null;
    player2CurrentQuestion = null;
    
    // Update display
    player1NameDisplayEl.textContent = player1Name;
    player2NameDisplayEl.textContent = player2Name;
    player1ScoreDisplayEl.textContent = '0';
    player2ScoreDisplayEl.textContent = '0';
    
    // Apply player colors to headers
    player1Header.style.backgroundColor = player1Color;
    player2Header.style.backgroundColor = player2Color;
    
    // Update character colors
    character1Body.style.color = player1Color;
    character2Body.style.color = player2Color;
    
    // Load initial questions for both players
    loadTwoPlayerQuestions();
}

// Load questions for both players simultaneously
function loadTwoPlayerQuestions() {
    // Clear previous feedback
    feedback1El.textContent = '';
    feedback2El.textContent = '';
    feedback1El.className = 'answer-feedback';
    feedback2El.className = 'answer-feedback';
    
    // Get random question types for each player
    player1CurrentQuestion = getTugOfWarQuestion();
    player2CurrentQuestion = getTugOfWarQuestion();
    
    player1QuestionType = player1CurrentQuestion.type;
    player2QuestionType = player2CurrentQuestion.type;
    
    // Load questions based on type
    loadPlayerQuestion(1, player1CurrentQuestion);
    loadPlayerQuestion(2, player2CurrentQuestion);
    
    updateTwoPlayerDisplay();
}

// Load question for a specific player
function loadPlayerQuestion(playerNum, questionData) {
    const modeDisplayEl = playerNum === 1 ? towModeDisplay1El : towModeDisplay2El;
    const questionContentEl = playerNum === 1 ? towQuestionContent1El : towQuestionContent2El;
    const optionsEl = playerNum === 1 ? towOptions1El : towOptions2El;
    
    // Update mode display
    const modeNames = {
        'reading': 'Reading Mode',
        'spelling': 'Spelling Mode',
        'sentence': 'Sentence Mode',
        'comprehension': 'Comprehension Mode',
        'rhyming': 'Rhyming Mode'
    };
    modeDisplayEl.textContent = modeNames[questionData.type] || 'Challenge Mode';
    
    // Load content based on type
    switch (questionData.type) {
        case 'reading':
            loadPlayerReading(playerNum, questionData, questionContentEl, optionsEl);
            break;
        case 'spelling':
            loadPlayerSpelling(playerNum, questionData, questionContentEl, optionsEl);
            break;
        case 'sentence':
            loadPlayerSentence(playerNum, questionData, questionContentEl, optionsEl);
            break;
        case 'comprehension':
            loadPlayerComprehension(playerNum, questionData, questionContentEl, optionsEl);
            break;
        case 'rhyming':
            loadPlayerRhyming(playerNum, questionData, questionContentEl, optionsEl);
            break;
    }
}

// Load reading question for player
function loadPlayerReading(playerNum, questionData, contentEl, optionsEl) {
    contentEl.innerHTML = `
        <div class="tow-emoji">${questionData.data.emoji}</div>
        <p class="tow-question">Which word matches this picture?</p>
    `;
    
    optionsEl.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkPlayerAnswer(playerNum, option, questionData.correct));
        optionsEl.appendChild(btn);
    });
}

// Load spelling question for player
function loadPlayerSpelling(playerNum, questionData, contentEl, optionsEl) {
    contentEl.innerHTML = `
        <div class="tow-emoji">${questionData.data.emoji}</div>
        <p class="tow-question">Spell the word for this picture!</p>
    `;
    
    optionsEl.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkPlayerAnswer(playerNum, option, questionData.correct));
        optionsEl.appendChild(btn);
    });
}

// Load sentence question for player
function loadPlayerSentence(playerNum, questionData, contentEl, optionsEl) {
    contentEl.innerHTML = `
        <p class="tow-question">${questionData.data.sentence}</p>
        <p class="tow-question-sub">Choose the missing word:</p>
    `;
    
    optionsEl.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkPlayerAnswer(playerNum, option, questionData.correct));
        optionsEl.appendChild(btn);
    });
}

// Load comprehension question for player
function loadPlayerComprehension(playerNum, questionData, contentEl, optionsEl) {
    contentEl.innerHTML = `
        <p class="tow-story">${questionData.data.story}</p>
        <p class="tow-question">${questionData.data.question}</p>
    `;
    
    optionsEl.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkPlayerAnswer(playerNum, option, questionData.correct));
        optionsEl.appendChild(btn);
    });
}

// Load rhyming question for player
function loadPlayerRhyming(playerNum, questionData, contentEl, optionsEl) {
    contentEl.innerHTML = `
        <p class="tow-question">Which word rhymes with:</p>
        <p class="tow-target-word">${questionData.data.targetWord}</p>
    `;
    
    optionsEl.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'tow-option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkPlayerAnswer(playerNum, option, questionData.correct));
        optionsEl.appendChild(btn);
    });
}

// Check player answer
function checkPlayerAnswer(playerNum, answer, correctAnswer) {
    const feedbackEl = playerNum === 1 ? feedback1El : feedback2El;
    const optionsEl = playerNum === 1 ? towOptions1El : towOptions2El;
    
    // Disable all buttons for this player
    optionsEl.querySelectorAll('.tow-option-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    const isCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();
    
    if (isCorrect) {
        feedbackEl.textContent = '✓ Correct!';
        feedbackEl.className = 'answer-feedback correct';
        
        // Update score and rope position
        if (playerNum === 1) {
            player1Score++;
            twoPlayerRopePosition = Math.min(100, twoPlayerRopePosition + 10);
        } else {
            player2Score++;
            twoPlayerRopePosition = Math.max(0, twoPlayerRopePosition - 10);
        }
        
        updateTwoPlayerDisplay();
        
        // Check for win condition
        setTimeout(() => {
            if (player1Score >= towRoundsToWin || player2Score >= towRoundsToWin) {
                showTwoPlayerGameOver();
            } else if (twoPlayerRopePosition >= 100 || twoPlayerRopePosition <= 0) {
                showTwoPlayerGameOver();
            } else {
                currentRound++;
                loadTwoPlayerQuestions();
            }
        }, 1500);
    } else {
        feedbackEl.textContent = '✗ Wrong';
        feedbackEl.className = 'answer-feedback incorrect';
        
        // Wait for both players to answer before loading next question
        setTimeout(() => {
            const otherFeedback = playerNum === 1 ? feedback2El : feedback1El;
            if (otherFeedback.textContent !== '') {
                // Both answered, load next round
                currentRound++;
                loadTwoPlayerQuestions();
            }
        }, 1500);
    }
}

// Update two player display
function updateTwoPlayerDisplay() {
    player1ScoreDisplayEl.textContent = player1Score;
    player2ScoreDisplayEl.textContent = player2Score;
    
    // Update rope position (flag position)
    towFlag2PEl.style.left = `${twoPlayerRopePosition}%`;
    
    // Update rope color based on who's winning
    if (twoPlayerRopePosition > 60) {
        towFlag2PEl.style.color = player1Color;
    } else if (twoPlayerRopePosition < 40) {
        towFlag2PEl.style.color = player2Color;
    } else {
        towFlag2PEl.style.color = '#ffd700'; // Neutral
    }
    
    // Update status
    towStatus2PEl.textContent = `Round ${currentRound} - First to ${towRoundsToWin} wins!`;
}

// Show two player game over
function showTwoPlayerGameOver() {
    const player1Won = player1Score >= towRoundsToWin || twoPlayerRopePosition >= 100;
    const player2Won = player2Score >= towRoundsToWin || twoPlayerRopePosition <= 0;
    
    const winnerName = player1Won ? player1Name : player2Name;
    const winnerColor = player1Won ? player1Color : player2Color;
    
    towQuestionContent1El.innerHTML = `
        <div class="tow-game-over">
            <h2 style="color: ${winnerColor}">🎉 ${winnerName} WINS!</h2>
            <p>Final Score: ${player1Name} ${player1Score} - ${player2Score} ${player2Name}</p>
            <button class="tow-replay-btn" id="towReplay2PBtn">Play Again 🔄</button>
        </div>
    `;
    
    towQuestionContent2El.innerHTML = '';
    towOptions1El.innerHTML = '';
    towOptions2El.innerHTML = '';
    feedback1El.textContent = '';
    feedback2El.textContent = '';
    
    towStatus2PEl.textContent = `${winnerName} is the champion! 🏆`;
    
    document.getElementById('towReplay2PBtn').addEventListener('click', initializeTwoPlayerTugOfWar);
}

// Register service worker for PWA (only when served via HTTP/HTTPS)
if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Initialize the game when the page loads
init();

// Building Resources System
let buildingResources = {
    grass: 0,
    dirt: 0,
    wood: 0,
    stone: 0,
    iron: 0,
    gold: 0,
    diamond: 0
};

// Load building data from localStorage
function loadBuildingData() {
    const saved = localStorage.getItem('buildingResources');
    if (saved) {
        buildingResources = JSON.parse(saved);
    }
}

// Save building data to localStorage
function saveBuildingData() {
    localStorage.setItem('buildingResources', JSON.stringify(buildingResources));
}

// Update resource display in UI
function updateResourceDisplay() {
    const blockTypes = ['grass', 'dirt', 'wood', 'stone', 'iron', 'gold', 'diamond'];
    blockTypes.forEach(type => {
        const countEl = document.getElementById(`count-${type}`);
        if (countEl) {
            countEl.textContent = buildingResources[type] || 0;
        }
    });
}

// Award building resources based on difficulty
function awardBuildingResources(difficulty) {
    let rewards = {};
    
    if (difficulty === 'easy') {
        rewards = { grass: 2, dirt: 2, wood: 1 };
    } else if (difficulty === 'medium') {
        rewards = { wood: 2, stone: 1, iron: 1 };
    } else if (difficulty === 'hard') {
        rewards = { stone: 2, iron: 1, gold: 1, diamond: 1 };
    }
    
    // Add rewards to inventory
    for (const [blockType, amount] of Object.entries(rewards)) {
        buildingResources[blockType] += amount;
    }
    
    saveBuildingData();
    updateResourceDisplay();
    
    // Show notification
    showBuildingRewardNotification(rewards);
}

// Show building reward notification
function showBuildingRewardNotification(rewards) {
    const blockCounter = document.getElementById('blockCounter');
    const blockCounterText = document.getElementById('blockCounterText');
    
    if (!blockCounter || !blockCounterText) return;
    
    // Format the reward text
    const rewardText = Object.entries(rewards)
        .map(([type, count]) => `+${count} ${type.charAt(0).toUpperCase() + type.slice(1)}`)
        .join(', ');
    
    blockCounterText.textContent = rewardText;
    
    // Show the counter
    blockCounter.classList.remove('hidden');
    
    // Hide after 3 seconds
    setTimeout(() => {
        blockCounter.classList.add('hidden');
    }, 3000);
}

// Initialize building resources on page load
loadBuildingData();

// ========================================
// MUSIC GAME FUNCTIONS
// ========================================

// Audio context for playing notes
let audioContext;
let currentTargetNote = 'C';
let currentMusicQuizAnswer = '';
let currentRecorderQuizAnswer = '';
let currentRecorderFingering = null;
let playerMelodyNotes = [];
let currentMelody = [];

// Music theory data
const musicTheoryFacts = [
    "There are 7 white keys (C, D, E, F, G, A, B) and 5 black keys in an octave!",
    "The black keys are called sharps (#) or flats (♭).",
    "C is also called 'Do' in solfège (Do, Re, Mi, Fa, Sol, La, Ti).",
    "An octave is the interval between one note and another with double its frequency.",
    "Middle C is the most central note on a piano keyboard.",
    "The pattern of black keys repeats every octave: 2 black keys, then 3 black keys.",
    "Music notes can be remembered with 'Every Good Boy Does Fine' for the lines of the treble clef."
];

// Detailed key information data
const keyDetailsData = {
    'C': {
        note: 'C',
        solfege: 'Do',
        frequency: '261.63 Hz',
        type: 'Natural (White Key)',
        position: '1st note of the scale',
        description: 'C is the most fundamental note in Western music and is often called "Middle C" when referring to the center of a piano keyboard. It\'s the starting point for learning music theory and serves as a reference point for all other notes.',
        funFacts: [
            'Most pianos have 88 keys, and Middle C is right in the middle!',
            'C Major is the only major scale with no sharps or flats',
            'The C note is used to tune many orchestras before performances',
            'C is the first note in the musical alphabet'
        ],
        songs: ['Happy Birthday', 'Mary Had a Little Lamb', 'Twinkle Twinkle']
    },
    'C#': {
        note: 'C# / D♭',
        solfege: 'Di / Ra',
        frequency: '277.18 Hz',
        type: 'Sharp/Flat (Black Key)',
        position: 'Between C and D',
        description: 'C sharp (C#) is the black key between C and D. It can also be called D flat (D♭), depending on the musical context. Sharp means one half-step higher than C, while flat means one half-step lower than D.',
        funFacts: [
            'C# and D♭ sound the same but are written differently in sheet music',
            'The black keys were added to pianos to play more musical scales',
            'C# Major has 7 sharps in its key signature!',
            'This note creates rich, colorful harmonies in music'
        ],
        songs: ['Für Elise (opening)', 'Moonlight Sonata', 'Clair de Lune']
    },
    'D': {
        note: 'D',
        solfege: 'Re',
        frequency: '293.66 Hz',
        type: 'Natural (White Key)',
        position: '2nd note of the C scale',
        description: 'D is the second note in the musical alphabet and is known for its bright, cheerful sound. Many folk songs and dance tunes are written in the key of D because it sounds happy and energetic.',
        funFacts: [
            'D is a favorite key for violinists because of the open D string',
            'Many Irish folk songs are played in the key of D',
            'The D note vibrates 293.66 times per second!',
            'D Major is often called the "key of glory" in classical music'
        ],
        songs: ['Ode to Joy', 'Jingle Bells', 'When the Saints Go Marching In']
    },
    'D#': {
        note: 'D# / E♭',
        solfege: 'Ri / Me',
        frequency: '311.13 Hz',
        type: 'Sharp/Flat (Black Key)',
        position: 'Between D and E',
        description: 'D sharp (D#) is the black key located between D and E. As E flat (E♭), it appears frequently in jazz and blues music, adding depth and emotion to melodies. This note creates a sense of tension and resolution in music.',
        funFacts: [
            'E♭ is extremely common in jazz music',
            'Many saxophones and clarinets are tuned to E♭',
            'This note appears in famous blues progressions',
            'E♭ Major has 3 flats: B♭, E♭, and A♭'
        ],
        songs: ['Take Five', 'Summertime (Gershwin)', 'Rhapsody in Blue']
    },
    'E': {
        note: 'E',
        solfege: 'Mi',
        frequency: '329.63 Hz',
        type: 'Natural (White Key)',
        position: '3rd note of the C scale',
        description: 'E is the third note of the musical scale and has a warm, resonant quality. It\'s one of the most important notes in music because it forms the major third interval with C, which gives major chords their happy sound.',
        funFacts: [
            'E is the highest note on a standard guitar',
            'The note E creates the "major" feeling in C major chords',
            'Many beginner songs start on the E note',
            'E Major is a favorite key for rock and pop music'
        ],
        songs: ['Let It Be', 'Hey Jude', 'Lean On Me']
    },
    'F': {
        note: 'F',
        solfege: 'Fa',
        frequency: '349.23 Hz',
        type: 'Natural (White Key)',
        position: '4th note of the C scale',
        description: 'F is the fourth note of the musical alphabet and marks an important point in the scale. The interval from C to F (called a perfect fourth) is one of the most consonant and pleasing intervals in all of music.',
        funFacts: [
            'There is no black key between E and F - they are only a half-step apart!',
            'F Major has one flat (B♭) in its key signature',
            'The F clef (bass clef) is named after the F note',
            'Many lullabies are written in the key of F Major'
        ],
        songs: ['Somewhere Over the Rainbow', 'Imagine', 'Can You Feel the Love Tonight']
    },
    'F#': {
        note: 'F# / G♭',
        solfege: 'Fi / Se',
        frequency: '369.99 Hz',
        type: 'Sharp/Flat (Black Key)',
        position: 'Between F and G',
        description: 'F sharp (F#) is the black key between F and G. It\'s also known as G flat (G♭). This note is important in many musical scales and creates exciting, dramatic moments in compositions. Many famous classical pieces use F# to create emotional depth.',
        funFacts: [
            'F# Major has 6 sharps - one of the sharpest keys!',
            'This note is very common in Eastern European folk music',
            'F# creates a bright, shimmering sound quality',
            'Many guitar solos feature the F# note prominently'
        ],
        songs: ['Prelude in C# Minor', 'Flight of the Bumblebee', 'Hungarian Rhapsody No. 2']
    },
    'G': {
        note: 'G',
        solfege: 'Sol',
        frequency: '392.00 Hz',
        type: 'Natural (White Key)',
        position: '5th note of the C scale',
        description: 'G is the fifth note of the musical scale and is incredibly important in music. The interval from C to G (called a perfect fifth) is the foundation of harmony in Western music. G Major is one of the most common keys in folk and country music.',
        funFacts: [
            'G Major uses only one sharp (F#) in its key signature',
            'The treble clef is also called the "G clef" because it circles the G line',
            'Many children\'s songs are in the key of G Major',
            'G note is the perfect fifth above C - a very harmonious interval!'
        ],
        songs: ['Row Row Row Your Boat', 'Old MacDonald', 'This Land Is Your Land']
    },
    'G#': {
        note: 'G# / A♭',
        solfege: 'Si / Le',
        frequency: '415.30 Hz',
        type: 'Sharp/Flat (Black Key)',
        position: 'Between G and A',
        description: 'G sharp (G#) is the black key between G and A, also called A flat (A♭). This note is particularly important in minor keys and creates a melancholic, emotional sound. A♭ Major is a favorite key for romantic and expressive music.',
        funFacts: [
            'A♭ Major has 4 flats in its key signature',
            'Many famous piano concertos are written in A♭ Major',
            'This note is common in gospel and soul music',
            'Jazz musicians love using A♭ for its rich, warm sound'
        ],
        songs: ['As Time Goes By', 'Somewhere', 'Memory (from Cats)']
    },
    'A': {
        note: 'A',
        solfege: 'La',
        frequency: '440.00 Hz',
        type: 'Natural (White Key)',
        position: '6th note of the C scale',
        description: 'A is the sixth note of the musical scale and has a special significance - the A above middle C vibrates at exactly 440 Hz, which is the international standard for tuning all musical instruments! This is called "concert pitch" or "A440."',
        funFacts: [
            'A440 Hz is the universal tuning standard for orchestras worldwide',
            'Orchestras tune to the oboe playing the A note',
            'A Major has 3 sharps: F#, C#, and G#',
            'The A note is used to check if instruments are in tune',
            'Your smartphone\'s dial tone uses the A note!'
        ],
        songs: ['Canon in D', 'Eine Kleine Nachtmusik', 'The Sound of Music']
    },
    'A#': {
        note: 'A# / B♭',
        solfege: 'Li / Te',
        frequency: '466.16 Hz',
        type: 'Sharp/Flat (Black Key)',
        position: 'Between A and B',
        description: 'A sharp (A#) is the black key between A and B, more commonly known as B flat (B♭) in most musical contexts. B♭ is extremely important in wind instruments - many trumpets, clarinets, and saxophones are naturally tuned to B♭.',
        funFacts: [
            'B♭ instruments are the most common type of band instruments',
            'B♭ Major has 2 flats: B♭ and E♭',
            'This is one of the most comfortable keys for brass instruments',
            'Many famous symphonies are written in B♭ Major',
            'B♭ creates a warm, mellow tone in music'
        ],
        songs: ['Star Wars Theme', 'Superman Theme', 'Exodus (Main Theme)']
    },
    'B': {
        note: 'B',
        solfege: 'Ti',
        frequency: '493.88 Hz',
        type: 'Natural (White Key)',
        position: '7th note of the C scale',
        description: 'B is the seventh and final note in the musical alphabet before returning to C. It creates a strong sense of wanting to resolve back to C, which is why it\'s called the "leading tone." There is no black key between B and C - they are only a half-step apart.',
        funFacts: [
            'B is called the "leading tone" because it leads back to C',
            'There\'s no black key between B and C, just like E and F',
            'B Major has 5 sharps in its key signature',
            'The note B is the highest of the natural notes',
            'B resolves to C creating a satisfying musical conclusion'
        ],
        songs: ['The Blue Danube', 'The Entertainer', 'Maple Leaf Rag']
    }
};

let currentSelectedKey = 'C'; // Track currently selected key for display

const musicQuizQuestions = [
    {
        question: "Which note comes after C?",
        options: ["D", "E", "B", "A"],
        answer: "D",
        type: "theory"
    },
    {
        question: "What is the solfège name for the note G?",
        options: ["Sol", "La", "Fa", "Do"],
        answer: "Sol",
        type: "theory"
    },
    {
        question: "How many white keys are in one octave?",
        options: ["7", "5", "12", "8"],
        answer: "7",
        type: "theory"
    },
    {
        question: "Which note is also called 'Do'?",
        options: ["C", "D", "E", "F"],
        answer: "C",
        type: "theory"
    },
    {
        question: "Listen to this note. Which one is it?",
        options: ["C", "E", "G", "A"],
        answer: "C",
        type: "listening",
        frequency: 261.63
    },
    {
        question: "Which black key is between C and D?",
        options: ["C#", "D#", "F#", "G#"],
        answer: "C#",
        type: "theory"
    }
];

const melodies = [
    {
        name: "Twinkle Twinkle Little Star",
        notes: ["C", "C", "G", "G", "A", "A", "G"]
    },
    {
        name: "Mary Had a Little Lamb",
        notes: ["E", "D", "C", "D", "E", "E", "E"]
    },
    {
        name: "Hot Cross Buns",
        notes: ["E", "D", "C", "E", "D", "C"]
    },
    {
        name: "Ode to Joy",
        notes: ["E", "E", "F", "G", "G", "F", "E", "D"]
    }
];

// Recorder fingering database for descant (soprano) recorder
// 0 = thumb hole (back), 1-7 = front holes from top to bottom
// Fingering: 1 = covered, 0 = open, 0.5 = half-covered
const recorderFingerings = [
    {
        note: "C",
        frequency: 523.25,
        fingering: [0.5, 1, 1, 1, 1, 1, 1, 1],
        description: "High C - Half-cover the thumb hole, cover all other holes",
        difficulty: "medium"
    },
    {
        note: "B",
        frequency: 493.88,
        fingering: [1, 0, 1, 1, 1, 1, 1, 1],
        description: "B - Cover thumb and all holes except the first finger",
        difficulty: "easy"
    },
    {
        note: "A",
        frequency: 440.00,
        fingering: [1, 0, 0, 1, 1, 1, 1, 1],
        description: "A - Cover thumb and bottom six holes",
        difficulty: "easy"
    },
    {
        note: "G",
        frequency: 392.00,
        fingering: [1, 0, 0, 0, 1, 1, 1, 1],
        description: "G - Cover thumb and bottom four holes",
        difficulty: "easy"
    },
    {
        note: "F",
        frequency: 349.23,
        fingering: [1, 0, 0, 0, 0, 1, 1, 1],
        description: "F - Cover thumb and bottom three holes",
        difficulty: "medium"
    },
    {
        note: "E",
        frequency: 329.63,
        fingering: [1, 0, 0, 0, 0, 0, 1, 1],
        description: "E - Cover thumb and bottom two holes",
        difficulty: "easy"
    },
    {
        note: "D",
        frequency: 293.66,
        fingering: [1, 0, 0, 0, 0, 0, 0, 1],
        description: "D - Cover thumb and only the bottom hole",
        difficulty: "easy"
    },
    {
        note: "C",
        frequency: 261.63,
        fingering: [1, 0, 0, 0, 0, 0, 0, 0],
        description: "C - Cover only the thumb hole (low C)",
        difficulty: "medium"
    },
    {
        note: "B",
        frequency: 246.94,
        fingering: [1, 1, 0, 0, 0, 0, 0, 0],
        description: "Low B - Cover thumb and first finger",
        difficulty: "hard"
    }
];

const recorderTips = [
    "The descant (soprano) recorder is the most common type for beginners!",
    "Always blow gently - too hard and the note will sound sharp or squeak!",
    "The thumb hole on the back is used for playing higher notes.",
    "Practice 'tonguing' by saying 'tu-tu-tu' while you play.",
    "Keep your fingers curved and cover the holes completely with the soft pads of your fingers.",
    "BAG are the first three notes most beginners learn!",
    "Hot Cross Buns uses only three notes: B, A, and G!",
    "The recorder is one of the oldest musical instruments, dating back over 700 years!",
    "Perfect posture helps you play better - sit or stand up straight!"
];

// Initialize audio context
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play a musical note
function playNote(frequency, duration = 0.5) {
    initAudioContext();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Initialize piano mode
function initPianoMode() {
    const pianoKeys = document.querySelectorAll('.piano-key');
    
    // Add click handlers to piano keys
    pianoKeys.forEach(key => {
        key.addEventListener('click', () => {
            const note = key.getAttribute('data-note');
            const frequency = parseFloat(key.getAttribute('data-frequency'));
            
            playNote(frequency);
            animateKeyPress(key);
            
            // Check if it's the target note
            if (note === currentTargetNote) {
                practiceFeedbackEl.textContent = '✓ Correct! Great job!';
                practiceFeedbackEl.style.color = '#4caf50';
                updateScore(10);
                
                setTimeout(() => {
                    nextPracticeNote();
                }, 1500);
            } else {
                practiceFeedbackEl.textContent = '❌ Try again!';
                practiceFeedbackEl.style.color = '#f44336';
            }
        });
    });
    
    // Play note button
    playNoteBtn.addEventListener('click', () => {
        const targetKey = Array.from(pianoKeys).find(key => key.getAttribute('data-note') === currentTargetNote);
        if (targetKey) {
            const frequency = parseFloat(targetKey.getAttribute('data-frequency'));
            playNote(frequency);
        }
    });
    
    // Initialize key selector buttons
    const keySelectButtons = document.querySelectorAll('.key-select-btn');
    keySelectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const keyNote = btn.getAttribute('data-note');
            displayKeyDetails(keyNote);
            
            // Update active button
            keySelectButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Key info play button
    const keyInfoPlayBtn = document.getElementById('keyInfoPlayBtn');
    if (keyInfoPlayBtn) {
        keyInfoPlayBtn.addEventListener('click', () => {
            const keyData = keyDetailsData[currentSelectedKey];
            const frequency = parseFloat(keyData.frequency);
            playNote(frequency, 1.0); // Longer duration for detailed listening
        });
    }
    
    // Display default key (C)
    displayKeyDetails('C');
    
    // Start with random note
    nextPracticeNote();
}

// Display detailed key information
function displayKeyDetails(keyNote) {
    const keyData = keyDetailsData[keyNote];
    if (!keyData) return;
    
    currentSelectedKey = keyNote;
    
    // Update header
    document.getElementById('keyInfoNote').textContent = keyData.note;
    
    // Update grid info
    document.getElementById('keySolfege').textContent = keyData.solfege;
    document.getElementById('keyFrequency').textContent = keyData.frequency;
    document.getElementById('keyType').textContent = keyData.type;
    document.getElementById('keyPosition').textContent = keyData.position;
    
    // Update description
    document.getElementById('keyDescription').textContent = keyData.description;
    
    // Update fun facts
    const funFactsList = document.getElementById('keyFunFacts');
    funFactsList.innerHTML = '';
    keyData.funFacts.forEach(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        funFactsList.appendChild(li);
    });
    
    // Update song examples
    const songExamplesContainer = document.getElementById('songExamples');
    songExamplesContainer.innerHTML = '';
    keyData.songs.forEach(song => {
        const span = document.createElement('span');
        span.className = 'song-tag';
        span.textContent = song;
        songExamplesContainer.appendChild(span);
    });
}

// Animate key press
function animateKeyPress(key) {
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing');
    }, 200);
}

// Next practice note
function nextPracticeNote() {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    currentTargetNote = notes[Math.floor(Math.random() * notes.length)];
    currentNoteEl.textContent = currentTargetNote;
    targetNoteTextEl.textContent = currentTargetNote;
    practiceFeedbackEl.textContent = '';
}

// Load music quiz
function loadMusicQuiz() {
    const question = musicQuizQuestions[Math.floor(Math.random() * musicQuizQuestions.length)];
    document.getElementById('musicQuizQuestion').textContent = question.question;
    currentMusicQuizAnswer = question.answer;
    
    // Show/hide play button for listening questions
    if (question.type === 'listening' && question.frequency) {
        playQuizNoteBtn.classList.remove('hidden');
        playQuizNoteBtn.onclick = () => playNote(question.frequency);
    } else {
        playQuizNoteBtn.classList.add('hidden');
    }
    
    // Generate options
    musicQuizOptionsEl.innerHTML = '';
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkMusicQuizAnswer(option);
        musicQuizOptionsEl.appendChild(btn);
    });
    
    // Random music fact
    musicFactDisplayEl.textContent = musicTheoryFacts[Math.floor(Math.random() * musicTheoryFacts.length)];
}

// Check music quiz answer
function checkMusicQuizAnswer(answer) {
    if (answer === currentMusicQuizAnswer) {
        showFeedback(true, '🎉 Excellent! You know your music!');
        updateScore(15);
        awardBuildingResources(currentDifficulty || 'easy');
        setTimeout(() => {
            nextBtn.classList.remove('hidden');
            nextBtn.onclick = loadMusicQuiz;
        }, 1500);
    } else {
        showFeedback(false, `Not quite! The answer is ${currentMusicQuizAnswer}.`);
    }
}

// Load melody challenge
function loadMelody() {
    const melody = melodies[Math.floor(Math.random() * melodies.length)];
    currentMelody = melody.notes;
    playerMelodyNotes = [];
    
    document.getElementById('melodyTitle').textContent = melody.name;
    
    // Display melody notes
    const melodyNotesEl = document.getElementById('melodyNotes');
    melodyNotesEl.innerHTML = '';
    melody.notes.forEach(note => {
        const span = document.createElement('span');
        span.className = 'melody-note';
        span.textContent = note;
        melodyNotesEl.appendChild(span);
    });
    
    playerNotesDisplayEl.textContent = '';
    
    // Play melody button
    playMelodyBtn.onclick = () => playMelodySequence(melody.notes);
    
    // Mini piano keys
    const miniKeys = document.querySelectorAll('.mini-key');
    miniKeys.forEach(key => {
        key.onclick = () => {
            const note = key.getAttribute('data-note');
            const frequency = parseFloat(key.getAttribute('data-frequency'));
            playNote(frequency, 0.3);
            
            playerMelodyNotes.push(note);
            playerNotesDisplayEl.textContent = playerMelodyNotes.join(' - ');
        };
    });
    
    // Check melody button
    checkMelodyBtn.onclick = checkMelody;
    
    // Reset button
    resetMelodyBtn.onclick = () => {
        playerMelodyNotes = [];
        playerNotesDisplayEl.textContent = '';
    };
}

// Play melody sequence
function playMelodySequence(notes) {
    const noteFrequencies = {
        'C': 261.63, 'D': 293.66, 'E': 329.63, 'F': 349.23,
        'G': 392.00, 'A': 440.00, 'B': 493.88
    };
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            playNote(noteFrequencies[note], 0.4);
        }, index * 500);
    });
}

// Check melody
function checkMelody() {
    if (playerMelodyNotes.length === 0) {
        showFeedback(false, 'Play some notes first!');
        return;
    }
    
    if (JSON.stringify(playerMelodyNotes) === JSON.stringify(currentMelody)) {
        showFeedback(true, '🎵 Perfect! You played the melody correctly!');
        updateScore(20);
        awardBuildingResources('hard');
        setTimeout(() => {
            nextBtn.classList.remove('hidden');
            nextBtn.onclick = loadMelody;
        }, 2000);
    } else {
        showFeedback(false, 'Not quite right. Listen again and try once more!');
    }
}

// Load recorder quiz
function loadRecorderQuiz() {
    // Select a random fingering based on difficulty
    let availableFingerings = recorderFingerings;
    if (currentDifficulty === 'easy') {
        availableFingerings = recorderFingerings.filter(f => f.difficulty === 'easy');
    } else if (currentDifficulty === 'medium') {
        availableFingerings = recorderFingerings.filter(f => f.difficulty === 'easy' || f.difficulty === 'medium');
    }
    
    const fingering = availableFingerings[Math.floor(Math.random() * availableFingerings.length)];
    currentRecorderFingering = fingering;
    currentRecorderQuizAnswer = fingering.note;
    
    // Display the fingering on the visual recorder
    displayRecorderFingering(fingering.fingering);
    
    // Set up play button
    playRecorderNoteBtn.onclick = () => playNote(fingering.frequency, 0.5);
    
    // Generate answer options
    const allNotes = [...new Set(recorderFingerings.map(f => f.note))];
    const incorrectOptions = allNotes.filter(n => n !== fingering.note);
    
    // Shuffle and select 3 incorrect options
    const shuffledIncorrect = incorrectOptions.sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [fingering.note, ...shuffledIncorrect].sort(() => Math.random() - 0.5);
    
    // Display options
    recorderQuizOptionsEl.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkRecorderQuizAnswer(option);
        recorderQuizOptionsEl.appendChild(btn);
    });
    
    // Display a random recorder tip
    recorderTipDisplayEl.textContent = recorderTips[Math.floor(Math.random() * recorderTips.length)];
}

// Display recorder fingering
function displayRecorderFingering(fingering) {
    fingering.forEach((value, index) => {
        const hole = document.getElementById('hole' + index);
        if (hole) {
            hole.className = 'hole-circle';
            if (value === 1) {
                hole.classList.add('closed');
            } else if (value === 0.5) {
                hole.classList.add('half');
            } else {
                hole.classList.add('open');
            }
        }
    });
}

// Check recorder quiz answer
function checkRecorderQuizAnswer(answer) {
    if (answer === currentRecorderQuizAnswer) {
        showFeedback(true, `🎺 Excellent! That's ${answer}! ${currentRecorderFingering.description}`);
        updateScore(15);
        awardBuildingResources(currentDifficulty || 'easy');
        setTimeout(() => {
            nextBtn.classList.remove('hidden');
            nextBtn.onclick = loadRecorderQuiz;
        }, 2000);
    } else {
        showFeedback(false, `Not quite! The correct answer is ${currentRecorderQuizAnswer}. ${currentRecorderFingering.description}`);
    }
}
