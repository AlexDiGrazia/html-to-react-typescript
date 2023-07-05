export type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

export const data: Character[] = [
  {
    name: "Alex Louis Armstrong",
    nickName: "Major Armstrong",
    skillset: ["Bodybuilding", "Stone Alchemy"],
    votes: 90,
    background:
      "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
    imageUrl:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
  },
  {
    name: "Alphonse Elrich",
    nickName: null,
    skillset: ["Being Loveable, Alchemy"],
    votes: 110,
    background:
      "Alphonse is a walking suit of armor on a quest to find his real body",
    imageUrl:
      "images/AlphonseElricArakawa.jpg",
  },
  {
    name: `Edward Elrich "Full Metal Alchemist"`,
    nickName: "The Fullmetal Alchemist",
    skillset: ["Alchemy", "Human Transmutation"],
    votes: 109,
    background:
      "Edward is a master alchemist and our main character... just don't call him short",
    imageUrl:
      "images/EdwardElrich.jpeg",
  },
  {
    name: "Greed",
    nickName: "Greed",
    votes: 45,
    skillset: ["Skin Hardening", "Homunculii"],
    imageUrl: "images/greed-fullmetal-alchemist.avif",
    background:
      "Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them.",
  },
  {
    name: "Nina Tucker",
    nickName: null,
    skillset: ["Being Adorable", "Combining..."],
    votes: 80,
    imageUrl:
      "images/Nina Tucker.jpeg",
    background:
      "Nina is an adorable little girl! If you've watched FMA you know...",
  },
  {
    name: "Riza Hawkeye",
    nickName: "Hawkeye",
    skillset: ["Sniper", "Loyal AF"],
    votes: 95,
    background:
      "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
    imageUrl:
      "images/riza_hawkeye___minimalist_vector_wallpaper_by_rebeccaangoo_d87573o-350t.png",
  },
  {
    name: "Solf J. Kimblee",
    nickName: "The Crimson Alchemist",
    votes: -9000,
    skillset: ["Being a piece of sh*t", "Alchemy"],
    background: "Kimblee suckkkkkssss, seriously he's not very nice",
    imageUrl:
      "images/Kimblee.webp",
  },
  {
    name: "Tim Marcoh",
    nickName: "Dr. Marcoh",
    votes: 40,
    skillset: ["Healing Alchemy", "Making Philospher Stones"],
    background:
      "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong",
    imageUrl:
      "images/Dr-Marcoh.jpg",
  },
  {
    name: "Winrey Rockbell",
    nickName: null,
    votes: 93,
    skillset: ["Automail Expert", "Babies"],
    background:
      "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
    imageUrl:
      "images/Winrey.jpeg",
  },
];
