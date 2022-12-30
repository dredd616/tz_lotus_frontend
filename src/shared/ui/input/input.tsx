import React, { FC, InputHTMLAttributes } from 'react';
import { SInput } from '@shared/ui/input/input.styles';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => <SInput {...props}/>;