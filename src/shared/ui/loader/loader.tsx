import React, { FC } from 'react';
import { MoonLoader } from 'react-spinners';
import { LoaderSizeProps } from 'react-spinners/helpers/props';

export const Loader: FC<LoaderSizeProps> = (props) => <div style={{alignSelf: 'center'}}><MoonLoader {...props}/></div>;