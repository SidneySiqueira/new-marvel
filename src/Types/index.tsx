export interface HeroesProps {
    heroes:
    {
        id: number;
        name: string;
        thumbnail: {
            extension: string;
            path: string;
        }
    }[]
}

export interface ComicsProps {
    comics: {
        title: string,
        description: string,
        thumbnail: {
            path: string,
            extension: string,
        },
    }[]
}

export interface EventsProps {
    events: {
        title: string,
        description: string,
        start: string,
        end: string,
        thumbnail: {
            path: string,
            extension: string
        },
    }[]
}

export interface HeroSelect {
    heroeSelect: {
        id: number,
        name: string,
        description: string,
        thumbnail: {
          path: string,
          extension: string,
        },
        urls: [
            { 
                type: string,
                url: string 
            },
        ]
      },
}
