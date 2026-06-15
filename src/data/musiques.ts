export interface Musique {
  id: string;
  name: string;
  avatar: string;
  file: string;
}

export const musiques: Musique[] = [
  {
    id: "1",
    name: "Funk to the future",
    avatar: "/images/cover/funk_to_future.jpg",
    file: "/audio/girl.mp3",
  },
  {
    id: "2",
    name: "Someone will go",
    avatar: "/images/cover/someone_will_go.jpg",
    file: "/audio/girl.mp3",
  },
    {
    id: "3",
    name: "These girls",
    avatar: "/images/cover/these_girls.jpg",
    file: "/audio/girl.mp3",
  },
    {
    id: "4",
    name: "A star is not born",
    avatar: "/images/cover/shallow.jpg",
    file: "/audio/girl.mp3",
  },
    {
    id: "5",
    name: "Every breath you make",
    avatar: "/images/cover/police.jpg",
    file: "/audio/girl.mp3",
  },
  {
    id: "6",
    name: "You know you aren't good",
    avatar: "/images/cover/you_know_you_arent_good.jpg",
    file: "/audio/girl.mp3",
  },
    {
    id: "7",
    name: "Drinking out loud",
    avatar: "/images/cover/out_loud.jpg",
    file: "/audio/sheeran.mp3",
  },
];