// React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> & {
//     Group: typeof Group

import { ButtonProps } from "antd";
import { RefAttributes } from "react";


export type NewItemButtonButtonProps = Omit<
    ButtonProps & RefAttributes<HTMLElement>,
    'onClick'
>