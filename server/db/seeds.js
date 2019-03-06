use bucket_list;
db.dropDatabase();

db.lists.insertMany([
  { name: "Bungy Jumping"},
  { name: "Sky Diving"}
]);
