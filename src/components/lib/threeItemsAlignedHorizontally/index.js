import React from "react";
import {Stack} from "@mui/material";

export default function ThreeItemsAlignedHorizontally({firstItem, secondItem, thirdItem}) {
    return (

            <Stack
                direction={{ xs: 'column', sm: 'column',md: 'row' }}
                spacing={{ xs: 3, sm: 10, md: 20 }}
                justifyContent="center"
                alignItems="center"
            >
                <div>{firstItem}</div>
                <div>{secondItem}</div>
                <div>{thirdItem}</div>
            </Stack>
    );
}

