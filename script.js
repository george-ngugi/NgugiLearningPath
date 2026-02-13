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
        { word: 'pig', emoji: '🐷', options: ['pig', 'pin', 'pit', 'pick'] }
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
        { word: 'ship', emoji: '🚢', options: ['ship', 'shin', 'shift', 'shim'] }
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
        { word: 'smile', emoji: '😄', options: ['smile', 'smite', 'smell', 'smoke'] }
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
        }
    ]
};

// Combine all words and sentences
const allWords = [...wordDatabase.easy, ...wordDatabase.medium, ...wordDatabase.hard];
const allSentences = [...sentenceDatabase.easy, ...sentenceDatabase.medium, ...sentenceDatabase.hard];
const allReadingSentences = [...readingSentences.easy, ...readingSentences.medium, ...readingSentences.hard];
const allComprehensions = [...comprehensionDatabase.easy, ...comprehensionDatabase.medium, ...comprehensionDatabase.hard];
const allRhymingWords = [...rhymingDatabase.easy, ...rhymingDatabase.medium, ...rhymingDatabase.hard];

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
let usedMathProblems = new Set();
let usedFrenchItems = new Set();
let currentRhymingWord = null;
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

// Subject selector elements
const englishSubjectBtn = document.getElementById('englishSubject');
const mathSubjectBtn = document.getElementById('mathSubject');
const frenchSubjectBtn = document.getElementById('frenchSubject');
const englishModesEl = document.getElementById('english-modes');
const mathModesEl = document.getElementById('math-modes');
const frenchModesEl = document.getElementById('french-modes');

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
    loadNewWord();
    setupEventListeners();
    
    // Voices may load asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Subject switching
    englishSubjectBtn.addEventListener('click', () => switchSubject('english'));
    mathSubjectBtn.addEventListener('click', () => switchSubject('math'));
    frenchSubjectBtn.addEventListener('click', () => switchSubject('french'));
    
    // English modes
    readingModeBtn.addEventListener('click', () => switchMode('reading'));
    spellingModeBtn.addEventListener('click', () => switchMode('spelling'));
    sentenceModeBtn.addEventListener('click', () => switchMode('sentence'));
    comprehensionModeBtn.addEventListener('click', () => switchMode('comprehension'));
    rhymingModeBtn.addEventListener('click', () => switchMode('rhyming'));
    
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
    
    // Hide all mode groups
    englishModesEl.classList.add('hidden');
    mathModesEl.classList.add('hidden');
    frenchModesEl.classList.add('hidden');
    
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
    
    // Hide all games - remove active class
    readingGame.classList.remove('active');
    spellingGame.classList.remove('active');
    sentenceGame.classList.remove('active');
    comprehensionGame.classList.remove('active');
    rhymingGame.classList.remove('active');
    mathGame.classList.remove('active');
    frenchGame.classList.remove('active');
    
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
    mathGame.classList.remove('active');
    clockGame.classList.remove('active');
    frenchGame.classList.remove('active');
    
    // Remove all mode button active states
    readingModeBtn.classList.remove('active');
    spellingModeBtn.classList.remove('active');
    sentenceModeBtn.classList.remove('active');
    comprehensionModeBtn.classList.remove('active');
    rhymingModeBtn.classList.remove('active');
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
    
    hideFeedback();
    nextBtn.classList.add('hidden');
    loadNewWord();
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
    nextBtn.classList.remove('hidden');
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
            text = `${word}. ${affirmation}, Aiden`;
        } else if (currentMode === 'spelling') {
            text = `${currentWord.word}. ${affirmation}, Aiden`;
        } else if (currentMode === 'comprehension') {
            const currentQuestion = currentComprehension.questions[currentComprehensionQuestionIndex - 1];
            const answer = currentQuestion ? currentQuestion.answer : '';
            text = `${answer}. ${affirmation}, Aiden`;
        } else if (currentMode === 'addition' || currentMode === 'subtraction' || currentMode === 'multiplication') {
            text = `The answer is ${currentMathProblem.answer}. ${affirmation}, Aiden`;
        } else if (currentMode === 'counting') {
            text = `There are ${currentMathProblem.count}. ${affirmation}, Aiden`;
        } else if (currentMode === 'words' || currentMode === 'numbers' || currentMode === 'colors' || currentMode === 'phrases' || currentMode === 'days') {
            text = `${currentFrenchItem.french}. ${affirmation}, Aiden`;
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

// Register service worker for PWA
if ('serviceWorker' in navigator) {
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
