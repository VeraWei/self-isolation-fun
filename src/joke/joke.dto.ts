export class JokeDTO {
    joke: string;
    status: number;
}

interface poet {
    name: string;
    url: string;
}

interface Poem {
    title: string;
    content: string;
    url: string;
    poet: poet;
}

export class PoemDto {
    content: Poem[];
    count: number;
}