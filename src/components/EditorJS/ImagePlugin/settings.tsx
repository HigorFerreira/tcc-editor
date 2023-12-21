import { PropsWithChildren, useEffect, useState } from "react";
import { setDataBuilder } from "@/components/EditorJS/ImagePlugin/utils";
import { SavingType } from "@/components/EditorJS/ImagePlugin/types";
import ImagePlugin from "@/components/EditorJS/ImagePlugin";

import { Slider } from 'antd';

export default function(
    {
        context
    }: PropsWithChildren<{ context: ImagePlugin }>
){
    const [ data, _setData ] = useState<SavingType>(context.stateData);
    const setData = setDataBuilder(_setData);

    useEffect(() => {
        console.log({ data });
        context.stateData = data;
        context.setData(() => data);
    }, [ data ]);
    
    context.settingsSetData = setData;
    return <div>
        <Slider
            onChange={value => {
                setData("width", value);
            }}
            defaultValue={data.width}
            min={0.1}
            max={1}
            step={0.1}
        />
    </div>
}