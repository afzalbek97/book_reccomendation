const fs = require("fs");

// Step 1: Load the original JSON data
const inputFilePath = "data.json"; // Path to your input JSON file
const outputFilePath = "reviews.json"; // Path to save the output JSON file

// Read the input JSON file
const booksData = JSON.parse(fs.readFileSync(inputFilePath, "utf8"));

// Step 2: Generate random reviews
function getRandomReview() {
  const reviews = [
    "Amazing book, highly recommend!",
    "It was a decent read, but not my favorite.",
    "Couldn't put it down, fantastic storytelling!",
    "Not what I expected, but it was okay.",
    "Loved it! The characters were so relatable.",
    "A bit slow at first but picked up nicely.",
    "Too predictable for my taste.",
    "One of the best books I've read this year.",
    "Didn't enjoy this one, unfortunately.",
    "A masterpiece! Will read again.",
    "Amazing book, highly recommend! I found it very engaging.",
    "It was a decent read, but not my favorite. Would definitely recommend it to friends.",
    "Couldn't put it down, fantastic storytelling! It was hard to finish this one.",
    "Not what I expected, but it was okay. The writing style wasn't for me.",
    "Loved it! The characters were so relatable. Perfect for a cozy weekend read.",
    "A bit slow at first but picked up nicely. I loved the twists and turns!",
    "Too predictable for my taste. The pacing was inconsistent.",
    "One of the best books I've read this year. Beautifully written, truly inspiring.",
    "Didn't enjoy this one, unfortunately. I struggled to connect with the characters.",
    "A masterpiece! Will read again. A truly unforgettable story.",
    "Amazing book, highly recommend! Would definitely recommend it to friends.",
    "It was a decent read, but not my favorite. I found it very engaging.",
    "Couldn't put it down, fantastic storytelling! The pacing was inconsistent.",
    "Not what I expected, but it was okay. I struggled to connect with the characters.",
    "Loved it! The characters were so relatable. Perfect for a cozy weekend read.",
    "A bit slow at first but picked up nicely. I found it very engaging.",
    "Too predictable for my taste. A truly unforgettable story.",
    "One of the best books I've read this year. I loved the twists and turns!",
    "Didn't enjoy this one, unfortunately. The writing style wasn't for me.",
    "A masterpiece! Will read again. I loved the twists and turns!",
    "Amazing book, highly recommend! The pacing was inconsistent.",
    "It was a decent read, but not my favorite. I loved the twists and turns!",
    "Couldn't put it down, fantastic storytelling! I loved the twists and turns!",
    "Not what I expected, but it was okay. Perfect for a cozy weekend read.",
    "Loved it! The characters were so relatable. A truly unforgettable story.",
    "A bit slow at first but picked up nicely. Beautifully written, truly inspiring.",
    "Too predictable for my taste. I found it very engaging.",
    "One of the best books I've read this year. Would definitely recommend it to friends.",
    "Didn't enjoy this one, unfortunately. The writing style wasn't for me.",
    "A masterpiece! Will read again. I found it very engaging.",
    "Amazing book, highly recommend! The pacing was inconsistent.",
    "It was a decent read, but not my favorite. I struggled to connect with the characters.",
    "Couldn't put it down, fantastic storytelling! I struggled to connect with the characters.",
    "Not what I expected, but it was okay. I loved the twists and turns!",
    "Loved it! The characters were so relatable. A bit slow at first but picked up nicely.",
    "A bit slow at first but picked up nicely. Would definitely recommend it to friends.",
    "Too predictable for my taste. A masterpiece! Will read again.",
    "One of the best books I've read this year. I struggled to connect with the characters.",
    "Didn't enjoy this one, unfortunately. I found it very engaging.",
    "A masterpiece! Will read again. I loved the twists and turns!",
    "Amazing book, highly recommend! I struggled to connect with the characters.",
    "It was a decent read, but not my favorite. I loved the twists and turns!",
    "Couldn't put it down, fantastic storytelling! Beautifully written, truly inspiring.",
    "Not what I expected, but it was okay. The pacing was inconsistent.",
    "Loved it! The characters were so relatable. I found it very engaging.",
    "A bit slow at first but picked up nicely. One of the best books I've read this year.",
    "Too predictable for my taste. A masterpiece! Will read again.",
    "One of the best books I've read this year. A bit slow at first but picked up nicely.",
    "Didn't enjoy this one, unfortunately. The writing style wasn't for me.",
    "A masterpiece! Will read again. I loved the twists and turns!",
    "Amazing book, highly recommend! It was a decent read, but not my favorite.",
    "It was a decent read, but not my favorite. I loved the twists and turns!",
    "Couldn't put it down, fantastic storytelling! Beautifully written, truly inspiring.",
    "Not what I expected, but it was okay. I found it very engaging.",
    "Loved it! The characters were so relatable. A truly unforgettable story.",
    "A bit slow at first but picked up nicely. I loved the twists and turns!",
    "Too predictable for my taste. I found it very engaging.",
    "One of the best books I've read this year. A bit slow at first but picked up nicely.",
    "Didn't enjoy this one, unfortunately. I struggled to connect with the characters.",
    "A masterpiece! Will read again. I found it very engaging.",
    "Amazing book, highly recommend! I found it very engaging.",
    "It was a decent read, but not my favorite. I loved the twists and turns!",
    "Couldn't put it down, fantastic storytelling! Perfect for a cozy weekend read.",
    "Not what I expected, but it was okay. The pacing was inconsistent.",
    "Loved it! The characters were so relatable. Would definitely recommend it to friends.",
    "A bit slow at first but picked up nicely. I loved the twists and turns!",
    "Too predictable for my taste. I loved the twists and turns!",
    "One of the best books I've read this year. A masterpiece! Will read again.",
    "Didn't enjoy this one, unfortunately. I loved the twists and turns!",
    "A masterpiece! Will read again. The pacing was inconsistent.",
    "Amazing book, highly recommend! A truly unforgettable story.",
    "It was a decent read, but not my favorite. A bit slow at first but picked up nicely.",
    "Couldn't put it down, fantastic storytelling! I loved the twists and turns!",
    "Not what I expected, but it was okay. Would definitely recommend it to friends.",
    "Loved it! The characters were so relatable. A truly unforgettable story.",
    "A bit slow at first but picked up nicely. I loved the twists and turns!",
    "Too predictable for my taste. The pacing was inconsistent.",
    "One of the best books I've read this year. A truly unforgettable story.",
    "Didn't enjoy this one, unfortunately. I loved the twists and turns!",
    "A masterpiece! Will read again. I found it very engaging.",
    "Amazing book, highly recommend! Would definitely recommend it to friends.",
    "It was a decent read, but not my favorite. I struggled to connect with the characters.",
    "Couldn't put it down, fantastic storytelling! A truly unforgettable story.",
    "Not what I expected, but it was okay. I loved the twists and turns!",
    "Loved it! The characters were so relatable. I found it very engaging.",
    "A bit slow at first but picked up nicely. A masterpiece! Will read again.",
    "Too predictable for my taste. The pacing was inconsistent.",
    "One of the best books I've read this year. I loved the twists and turns!",
    "Didn't enjoy this one, unfortunately. A bit slow at first but picked up nicely.",
    "A masterpiece! Will read again. The pacing was inconsistent.",
    "Amazing book, highly recommend! A bit slow at first but picked up nicely.",
    "It was a decent read, but not my favorite. One of the best books I've read this year.",
    "Couldn't put it down, fantastic storytelling! A truly unforgettable story.",
    "Not what I expected, but it was okay. A bit slow at first but picked up nicely.",
    "Loved it! The characters were so relatable. I loved the twists and turns!",
    "A bit slow at first but picked up nicely. Would definitely recommend it to friends.",
    "Too predictable for my taste. A bit slow at first but picked up nicely.",
    "One of the best books I've read this year. The pacing was inconsistent.",
    "Didn't enjoy this one, unfortunately. Would definitely recommend it to friends.",
  ];

  const randomIndex = Math.floor(Math.random() * reviews.length);
  return {
    comment: reviews[randomIndex],
    date: new Date().toISOString(),
  };
}

// Step 3: Assign 2–4 reviews to each book
const reviewsData = booksData.map((book) => {
  const numReviews = Math.floor(Math.random() * 3) + 2; // Randomly generate 2–4 reviews
  const bookReviews = [];

  for (let i = 0; i < numReviews; i++) {
    bookReviews.push(getRandomReview());
  }

  return {
    isbn13: book.isbn13,
    isbn10: book.isbn10,
    reviews: bookReviews,
  };
});

// Step 4: Save the reviews to a new JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(reviewsData, null, 2));

console.log(`Generated reviews for each book and saved to ${outputFilePath}`);
