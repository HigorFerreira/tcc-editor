import { Dispatch, SetStateAction } from "react";
import { SavingType, SetData } from "@/components/EditorJS/ImagePlugin/types";

export function setDataBuilder(setter: Dispatch<SetStateAction<SavingType>>): SetData {
    return function (param1, param2?) {
        switch(typeof param1){
            case "function":
                const fn = param1
                setter(prev => fn(prev))
                break;
            case "string":
                const context = param1;
                if(context === "isDownloaded"){
                    setter(prev => ({ ...prev, isDownloaded: param2 as boolean }));
                }
                else if(context === "width"){
                    setter(prev => ({ ...prev, width: param2 as number }));
                }
                else{
                    setter(prev => ({ ...prev, [context]: param2 }));
                }
                break;
        }
    }
}

export function escapeHTML(str: string): string {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
}