import React, { ButtonHTMLAttributes, FC } from 'react';
import { SButton } from './button.styles';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => <SButton {...props}/>;