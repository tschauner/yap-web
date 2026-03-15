export interface Agent {
  id: string;
  name: string;
  emoji: string;
  color: string;
  pitch: string;
  description: string;
  isSpecial?: boolean;
}

export const agents: Agent[] = [
  {
    id: "mom",
    name: "Mom",
    emoji: "🫵",
    color: "#FF2D55",
    pitch: "You'll finish it. Because I raised you better than this.",
    description: "Guilt trips that escalate to emotional devastation",
  },
  {
    id: "bestFriend",
    name: "Best Friend",
    emoji: "🫶",
    color: "#007AFF",
    pitch: "I'll hype you up and roast you until it's done.",
    description: "Roasts you because they love you",
  },
  {
    id: "boss",
    name: "Boss",
    emoji: "👔",
    color: "#8E8E93",
    pitch: "Deadlines exist. I enforce them. Simple.",
    description: "Corporate passive-aggression in notification form",
  },
  {
    id: "drill",
    name: "Drill Sergeant",
    emoji: "🪖",
    color: "#34C759",
    pitch: "I will break you. And then you will be unstoppable.",
    description: "Full R. Lee Ermey mode. No mercy.",
  },
  {
    id: "therapist",
    name: "Therapist",
    emoji: "🛋️",
    color: "#AF52DE",
    pitch: "We'll find the root cause. And then we'll fix it.",
    description: "Validates you, then asks the hard questions",
  },
  {
    id: "grandma",
    name: "Grandma",
    emoji: "👵",
    color: "#D98C73",
    pitch: "I've got all day. And I know where you live.",
    description: "\"I'm not mad, just disappointed\" on steroids",
  },
];

export const specialAgents: Agent[] = [
  {
    id: "ex",
    name: "The Ex",
    emoji: "💔",
    color: "#CC3366",
    pitch: "I just think it's interesting you couldn't do this when we were together.",
    description: "Passive-aggressive. Hurtful. Somehow effective.",
    isSpecial: true,
  },
  {
    id: "conspiracyTheorist",
    name: "The Theorist",
    emoji: "🛸",
    color: "#33B366",
    pitch: "The system doesn't want you to succeed. I do.",
    description: "They don't want you to finish. That's why you must.",
    isSpecial: true,
  },
  {
    id: "passiveAggressiveColleague",
    name: "The Colleague",
    emoji: "😊",
    color: "#AEAEB2",
    pitch: "I'll just... wait. No, go ahead. I'll handle it.",
    description: "\"No no, it's fine. I'll cover for you. Again.\"",
    isSpecial: true,
  },
];

export interface Notification {
  agent: string;
  emoji: string;
  time: string;
  body: string;
  level: "gentle" | "nudge" | "push" | "urgent" | "meltdown";
}

export const sampleNotifications: Notification[] = [
  {
    agent: "Mom",
    emoji: "🫵",
    time: "2m ago",
    body: "The fridge is empty and you're scrolling. Put shoes on.",
    level: "gentle",
  },
  {
    agent: "Mom",
    emoji: "🫵",
    time: "47m ago",
    body: "I didn't raise you to live like this. The dishes are RIGHT THERE.",
    level: "push",
  },
  {
    agent: "Mom",
    emoji: "🫵",
    time: "1h ago",
    body: "Fine. I'll just sit here in the dark. Alone. Don't worry about me.",
    level: "meltdown",
  },
  {
    agent: "Drill Sergeant",
    emoji: "🪖",
    time: "5m ago",
    body: "YOUR GYM BAG IS PACKED. YOUR SHOES ARE BY THE DOOR. WHAT IS THE HOLDUP, SOLDIER?!",
    level: "urgent",
  },
  {
    agent: "Therapist",
    emoji: "🛋️",
    time: "12m ago",
    body: "That cursor has been blinking on slide 3 for 20 minutes. How does that make you feel?",
    level: "nudge",
  },
];

export const leaderboardData = [
  { rank: 1, agent: "Drill Sergeant", emoji: "🪖", rate: 87, missions: 2341 },
  { rank: 2, agent: "Mom", emoji: "🫵", rate: 82, missions: 5120 },
  { rank: 3, agent: "Boss", emoji: "👔", rate: 74, missions: 1892 },
  { rank: 4, agent: "Best Friend", emoji: "🤙", rate: 68, missions: 3456 },
  { rank: 5, agent: "Grandma", emoji: "👵", rate: 65, missions: 1230 },
  { rank: 6, agent: "Therapist", emoji: "🛋️", rate: 52, missions: 980 },
];
