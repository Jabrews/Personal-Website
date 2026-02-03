import { useState } from 'react'
import { motion } from 'framer-motion'

// utill
import { get_svg_icons } from '../../util/get_svg_icons'

// components
import { FloatText } from "../FloatText/FloatText"
import GlassCard from "../GlassCard/GlassCard"

type ItemProps = {
    item: string
}

export default function Item({ item }: ItemProps) {

    const [hover, toggleHover] = useState(false)


    return (
        <motion.div
            onHoverStart={() => toggleHover(true)}
            onHoverEnd={() => toggleHover(false)}
        >
            
            <GlassCard>
                <div className="item" id={item.toLowerCase()}>
                    <FloatText text={item} hover={hover} />
                    <motion.div
                        animate={
                            hover
                                ? { y: -24, opacity: 0 }
                                : { y: 0, opacity: 1 }
                        }
                        transition={{
                            duration: 0.45,
                            ease: "easeOut",
                            delay: 0.15,
                        }}
                    >
                        {get_svg_icons({ icon: item.toLowerCase() })}
                    </motion.div>                
                </div>
            </GlassCard>

        </motion.div>

    )


}