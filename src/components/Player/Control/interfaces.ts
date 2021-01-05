export interface SliderProps {
    size?: number;
}

export interface PlayerProps {
    seekTo(event: number): Function;
}

export interface SecondProps {
    playedSeconds: any;
    loadedSeconds: string;
}

export interface VolumeProps {
    value?: number;
    dragging?: boolean;
    index?: number;
    rest?: object;
}
