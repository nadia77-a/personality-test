import React from "react";
import { render } from '@testing-library/react';
import {Button} from '../Button';


it('renders withowt crashing',()=>{
    const div = document.createElement('div');
    render(<Button></Button>,div);
})