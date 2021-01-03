import React, { useState } from 'react';

import Slider, { SliderTooltip, Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';

import * as M from '@material-ui/core';
import * as I from '@material-ui/icons';
import * as Fi from 'react-icons/fi';
import * as Fa from 'react-icons/fa';
import * as S from './styles';

import soundMp4 from '../../../assets/videos/oasis_wonderwall.mp4';

const Control: React.FC = () => {
    const [play, setPlay] = useState(false);
    const [percent, setPercent] = useState('');
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const [second, setSecond] = useState(0.0);
    const [totalSecond, setTotalSecond] = useState(0.0);

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

    const handleSecond = (value: any) => {
        const time = value.playedSeconds.toFixed(0) * 1;
        const totalTime = parseInt(value.loadedSeconds, 10);

        function convertTime(seconds: number) {
            const format = (val: number) => `0${Math.floor(val)}`.slice(-2);
            const minutes = (seconds % 3600) / 60;

            return [minutes, seconds % 60].map(format).join('.');
        }

        const secToMinute = parseFloat(convertTime(time));
        const secTotalToMinute = parseFloat(convertTime(totalTime));

        setSecond(secToMinute);
        return setTotalSecond(secTotalToMinute);
    };

    const handleVolume = (props: any) => {
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

    const handlePercent = (value: string) => {
        setPercent(value);
    };

    console.log(totalSecond);

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
                        url={soundMp4}
                        playing={play}
                        onPlay={() => console.log('starts playing')}
                        onProgress={(duration: any) => {
                            return handleSecond(duration);
                        }}
                        volume={volume}
                    />
                    <S.Slider size={400}>
                        <S.SliderPlayer>
                            <p>{second.toFixed(2)}</p>
                            <Slider
                                min={0}
                                max={100}
                                defaultValue={0}
                                onChange={() => handlePercent('s')}
                                handle={handleVolume}
                            />
                            <p>{totalSecond.toFixed(2)}</p>
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
                                onChange={() => handlePercent('')}
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
