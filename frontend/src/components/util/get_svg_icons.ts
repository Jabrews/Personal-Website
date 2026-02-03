import React from 'react'


// articles
import { ChartNoAxesGantt } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';
import { Check } from 'lucide-react';
import { Grid3x3 } from 'lucide-react';
import { Cat } from 'lucide-react';


type UseSvgIconArguments = {
    icon : string,
    size? : number,
}

export function get_svg_icons({ icon, size }: UseSvgIconArguments) {
  switch (icon) {

    case 'no-article' :
        return React.createElement(ChartNoAxesGantt, {size})    
    case 'send' :
      return React.createElement(SendHorizontal, {size})
    case 'check' :
        return React.createElement(Check, {size})
    case 'flowgrid' :
        return React.createElement(Grid3x3)
    case 'kiloquest' :
        return React.createElement(Cat)

  }


  
}