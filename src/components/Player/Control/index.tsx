import React, { useState, useRef } from 'react';

import Slider, { SliderTooltip, Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';

import * as M from '@material-ui/core';
import * as I from '@material-ui/icons';
import * as Fi from 'react-icons/fi';
import * as Fa from 'react-icons/fa';
import * as S from './styles';

import * as Interface from './interfaces';

import soundMp4 from '../../../assets/videos/oasis_wonderwall.mp4';

const Control: React.FC = () => {
    const [play, setPlay] = useState(false);
    const [percent, setPercent] = useState('');
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const [second, setSecond] = useState('0.0');
    const [secondTime, setSecondTime] = useState(0.0);
    const [totalSecond, setTotalSecond] = useState(0.0);
    const [totalSecondMinute, setTotalSecondMinute] = useState('0.0');

    const player = useRef<Interface.PlayerProps>(null);

    function convertTime(seconds: number) {
        const format = (val: number) => `0${Math.floor(val)}`.slice(-2);
        const minutes = (seconds % 3600) / 60;

        return [minutes, seconds % 60].map(format).join(':');
    }

    const handlePlay = () => {
        setPlay(!play);
    };

    const handleMute = () => {
        setMuted(!muted);
        if (!muted) {
            return setVolume(1);
        }

        return setVolume(0);
    };

    const handleSecond = (value: Interface.SecondProps) => {
        const time = value.playedSeconds.toFixed(0) * 1;
        const totalTime = parseInt(value.loadedSeconds, 10);

        const secToMinute = convertTime(time);
        const secTotalToMinute = convertTime(totalTime);

        setSecond(secToMinute);
        setSecondTime(time);
        setTotalSecond(totalTime);
        return setTotalSecondMinute(secTotalToMinute);
    };

    const handleVolume = (props: Interface.VolumeProps) => {
        const { value, dragging, index, rest } = props;

        return (
            <SliderTooltip
                prefixCls="rc-slider-tooltip"
                overlay={`${value} ${percent}`}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={value} {...rest} />
            </SliderTooltip>
        );
    };

    const handlePercent = (event: number, value: string) => {
        if (value && player.current) {
            player.current.seekTo(event);
        }

        setPercent(value);
    };

    return (
        <S.Container>
            <M.Grid container>
                <M.Grid item xs={12} lg={4} md={4} sm={4}>
                    <S.Music>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/I/81drRCjiLNL._AC_SX466_.jpg"
                            alt="Music"
                        />
                        <div>
                            <h2>Wonderwall</h2>
                            <h3>Oasis</h3>
                        </div>

                        <Fi.FiHeart />
                        <Fi.FiExternalLink />
                    </S.Music>
                </M.Grid>

                <M.Grid item xs={12} lg={4} md={4} sm={4}>
                    <S.Player>
                        <Fa.FaStepBackward />
                        <S.PlayerIcon>
                            {play ? (
                                <M.Tooltip title="Pausar">
                                    <div>
                                        <Fa.FaStopCircle onClick={handlePlay} />
                                    </div>
                                </M.Tooltip>
                            ) : (
                                <M.Tooltip title="Tocar">
                                    <div>
                                        <Fa.FaPlayCircle onClick={handlePlay} />
                                    </div>
                                </M.Tooltip>
                            )}
                        </S.PlayerIcon>
                        <Fa.FaStepForward />
                    </S.Player>
                    <S.RctPlayer
                        ref={player}
                        url={soundMp4}
                        playing={play}
                        onProgress={(duration: Interface.SecondProps) => {
                            return handleSecond(duration);
                        }}
                        volume={volume}
                    />
                    <S.Slider size={400}>
                        <S.SliderPlayer>
                            <p>{second}</p>
                            <Slider
                                min={0}
                                max={totalSecond}
                                value={secondTime}
                                defaultValue={0}
                                onChange={(e) => handlePercent(e, 's')}
                                handle={handleVolume}
                            />
                            <p>{totalSecondMinute}</p>
                        </S.SliderPlayer>
                    </S.Slider>
                </M.Grid>
                <M.Grid item xs={12} lg={4} md={4} sm={4}>
                    <S.Volume onClick={handleMute}>
                        {muted ? <I.VolumeDown /> : <I.VolumeMute />}
                        <S.Slider>
                            <Slider
                                min={0}
                                max={1}
                                value={volume}
                                defaultValue={1}
                                onChange={(e) => handlePercent(e, '')}
                                handle={handleVolume}
                            />
                        </S.Slider>
                        <I.VolumeUp />
                    </S.Volume>
                </M.Grid>
            </M.Grid>
        </S.Container>
    );
};

export default Control;
