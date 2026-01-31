import React from 'react'

// articles
import { ChartNoAxesGantt } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';



type UseSvgIconArguments = {
    icon : string,
    size : number,
}

export function useSvgIcons({ icon, size }: UseSvgIconArguments) {
  switch (icon) {

    case 'no-article' :
        return React.createElement(ChartNoAxesGantt, {size})    
    case 'send' :
      return React.createElement(SendHorizontal, {size})
  }


  
}