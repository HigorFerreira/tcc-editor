import { PiEmptyThin } from "react-icons/pi";
import { NoDataContainer } from '@/components/Plugins/Gloss/style';
import { PropsWithChildren } from "react";

export default function NoData(
    { text }: PropsWithChildren<{ text: string }>
){
    return <NoDataContainer>
        <PiEmptyThin size={60}  />
        { text }
    </NoDataContainer>
}