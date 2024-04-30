import { PropsWithChildren, useEffect, useState } from "react";

import {
    useImageState,
    useSetImageState,
    useLoading,
    useClear,
} from '@/components/Plugins/Image';
import ImageClass from "@/components/Plugins/Image/class";
import { DataType } from "@/components/Plugins/Image/types";
import {
    SettingsContainer,
    SettingsButtonsContainer,
} from '@/components/Plugins/Image/styles';

import { Slider, Button } from 'antd';



export default function Settings(
    {
        context,
    }: PropsWithChildren<{ context: ImageClass<DataType> }>
){
    const state = useImageState();
    const setImageState = useSetImageState();
    const clear = useClear();

    const loading = useLoading();


    if(!state?.image){
        return null
    }

    return <SettingsContainer>
        <p>Tamanho:</p>
        <Slider
            defaultValue={state?.width??0.4}
            onChange={(value) => {
                setImageState && setImageState('width', value);
            }}
            min={0.1}
            max={1}
            step={0.1}
        />
        <SettingsButtonsContainer>
            <Button
                danger
                loading={loading}
                onClick={() => clear && clear()}
            >
                Limpar
            </Button>
        </SettingsButtonsContainer>
    </SettingsContainer>
}