import React from 'react'
import styled from 'styled-components'

const S = styled.div`
    position:relative;
    margin-left:5%;
    margin-right: 5%;
    margin-top: 5%;
    display: inline-block;
`
const Rectangle1 =styled.div`
    border-radius:30% 70% 57% 43% / 25% 79% 21% 75%;
    border: transparent 1px;
    top:45%;
    left:28%;
    opacity: 0.2;
    position:absolute;
    width: 50px;
    height: 40px;
    background: #f1555a;
`
const Rectangle2 =styled.div`
    border-radius:73% 27% 57% 43% / 42% 18% 82% 58% ;
    border: transparent 1px;
    top:45%;
    left:60%;
    opacity: 0.2;
    position:absolute;
    width: 40px;
    height: 30px;
    background: #f1555a;
    transform: rotate(-30deg);
`
const Rectangle3 =styled.div`
    border-radius:29% 71% 91% 9% / 21% 41% 59% 79%  ;
    border: transparent 1px;
    top:75%;
    left:12%;
    opacity: 0.2;
    position:absolute;
    width: 90px;
    height: 120px;
    background: #2c3840;
    transform: rotate(-60deg);
`

function Picture() {
    return (
        <>
        <S>
        <Rectangle1></Rectangle1>
        <Rectangle2></Rectangle2>
        <Rectangle3></Rectangle3>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="350.000000pt" height="450.000000pt" viewBox="0 0 300.000000 400.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)" fill="#364650" stroke="none">
        <path d="M1155 3886 c-81 -27 -217 -113 -274 -175 -46 -49 -72 -67 -146 -99 -184 -80 -256 -143 -326 -288 -27 -57 -65 -128 -83 -157 -19 -30 -44 -82 -56 -118 -21 -62 -21 -74 -15 -409 6 -314 5 -352 -12 -425 -10 -46 -18 -116 -18 -166 1 -75 5 -96 37 -170 20 -46 50 -118 67 -159 21 -48 46 -146 72 -280 54 -271 79 -323 146 -299 52 18 99 113 149 298 14 53 32 110 40 126 15 29 15 29 10 -30 -18 -211 -101 -387 -300 -641 -101 -129 -169 -239 -201 -324 -36 -96 -84 -200 -91 -200 -3 0 -2 10 2 23 3 12 3 19 -1 15 -11 -10 -13 -98 -3 -104 4 -3 8 -1 8 5 0 5 32 85 72 178 79 187 131 277 232 403 203 252 305 486 297 683 0 22 -5 36 -11 32 -6 -3 -7 1 -4 10 4 8 1 22 -6 30 -26 31 2 13 31 -20 17 -19 43 -40 57 -47 24 -12 26 -18 24 -63 -7 -137 -50 -325 -93 -405 -22 -40 -24 -63 -8 -91 8 -16 7 -30 -5 -60 -28 -69 -25 -74 77 -125 148 -75 200 -115 306 -241 58 -68 121 -175 121 -204 0 -8 9 -28 19 -45 17 -27 35 -37 131 -68 150 -50 185 -44 136 25 -110 152 -131 232 -121 454 10 214 10 247 -4 273 -6 12 -21 22 -31 22 -25 0 -25 13 0 92 11 34 23 87 26 116 l7 52 67 0 c59 0 71 4 113 33 114 81 249 298 219 353 -6 11 -48 39 -94 64 -114 62 -187 70 -273 30 -33 -15 -76 -30 -95 -34 -52 -9 -84 -34 -69 -52 6 -8 18 -14 27 -14 8 0 12 -3 9 -6 -13 -13 65 -63 114 -73 100 -22 156 -15 251 31 88 41 99 52 76 77 -11 11 -9 11 10 2 32 -17 37 -36 22 -84 -16 -49 -89 -167 -134 -216 -66 -71 -103 -91 -173 -91 -46 0 -65 4 -69 15 -6 15 -46 30 -109 41 -22 3 -73 22 -114 41 -40 19 -102 48 -136 63 -35 16 -81 45 -104 65 -32 30 -47 36 -68 32 -36 -7 -71 12 -116 62 -25 28 -37 51 -37 71 0 16 -13 71 -30 122 -16 51 -36 125 -45 163 -25 107 -48 134 -87 98 -17 -15 -18 -15 -18 13 0 17 15 53 34 82 18 29 39 78 46 110 10 50 9 63 -6 102 -31 80 -41 90 -89 90 -47 0 -108 -38 -147 -91 -28 -37 -35 -159 -13 -219 24 -69 100 -191 144 -234 38 -37 42 -39 67 -27 36 16 46 4 69 -79 9 -36 28 -86 40 -111 35 -68 29 -160 -19 -319 -44 -146 -79 -223 -114 -250 -32 -26 -44 -25 -70 2 -25 27 -42 90 -82 303 -29 154 -78 304 -138 421 -35 69 -41 171 -16 301 20 105 21 133 17 445 -5 318 -4 336 16 404 12 39 33 88 47 109 14 21 51 88 82 149 79 153 120 192 298 280 112 56 148 80 187 121 48 52 140 114 231 154 45 19 60 21 165 15 264 -14 406 -55 571 -165 128 -86 175 -131 184 -179 1 -3 9 -22 19 -43 41 -85 60 -293 36 -397 -5 -25 -25 -86 -43 -135 -37 -98 -90 -295 -81 -303 6 -6 10 4 40 118 13 52 44 146 67 210 43 114 43 116 42 240 -2 209 -44 333 -142 421 -31 28 -70 57 -85 65 -15 8 -54 32 -85 52 -98 64 -315 124 -462 128 -41 2 -95 5 -120 8 -25 2 -63 -1 -85 -8z m-575 -1418 c42 -46 50 -159 13 -214 -8 -13 -15 -27 -16 -31 -1 -4 -5 -7 -8 -6 -12 4 -41 -74 -37 -103 3 -29 8 -31 62 -22 16 2 22 -7 34 -47 29 -103 55 -192 73 -249 11 -33 17 -61 15 -63 -3 -4 -33 75 -61 164 -18 57 -33 68 -70 51 -42 -19 -79 26 -177 211 -23 45 -28 66 -28 128 0 85 14 120 63 157 65 49 106 57 137 24z m1104 -705 l58 -29 -58 -2 c-222 -5 -305 -9 -349 -16 -47 -7 -49 -6 -25 8 14 8 41 18 60 21 19 4 58 17 85 29 70 32 152 28 229 -11z m33 -45 c18 -7 33 -15 33 -18 0 -3 -33 -22 -74 -43 -66 -33 -81 -37 -151 -37 -43 0 -95 5 -116 12 -38 11 -79 41 -79 57 0 17 113 30 166 19 40 -8 65 -7 110 5 74 19 71 19 111 5z m-777 -174 c61 -49 278 -151 369 -174 104 -27 109 -41 7 -19 -57 12 -120 35 -188 70 -113 57 -248 140 -248 152 0 14 15 7 60 -29z m40 -60 c8 -6 38 -23 65 -37 28 -13 75 -38 105 -55 52 -30 130 -54 213 -67 l39 -6 -7 -42 c-7 -45 -31 -137 -46 -175 -5 -13 -7 -28 -4 -33 17 -27 -128 7 -215 51 -33 17 -94 62 -137 100 -76 69 -101 82 -121 58 -5 -7 -21 -50 -35 -95 -28 -93 -58 -163 -68 -163 -18 0 -17 35 3 73 44 87 98 308 98 405 l0 53 48 -27 c26 -15 54 -33 62 -40z m9 -279 c39 -36 98 -78 131 -95 64 -32 188 -70 207 -63 10 4 12 -14 8 -74 -11 -163 -15 -194 -29 -228 -13 -29 -20 -35 -46 -35 -29 0 -129 55 -144 79 -17 26 -169 132 -245 170 -67 34 -81 45 -76 59 26 62 65 175 65 187 0 30 20 65 38 65 10 0 51 -29 91 -65z m401 -191 c6 -14 8 -29 5 -34 -3 -5 -1 -20 5 -35 7 -19 7 -24 -1 -19 -8 5 -10 -49 -7 -192 4 -183 7 -204 30 -266 14 -38 43 -93 64 -123 22 -31 43 -62 49 -70 19 -29 -6 -26 -121 12 l-118 39 -27 66 c-45 111 -105 201 -182 274 -122 116 -167 154 -181 154 -17 0 -130 52 -151 70 -12 10 -11 18 7 56 l22 44 83 -45 c77 -41 169 -105 236 -165 44 -39 108 -80 136 -87 37 -9 74 17 89 62 7 21 15 88 18 149 3 61 7 117 10 124 6 20 24 14 34 -14z"/>
        <path d="M1198 3385 c-137 -29 -296 -112 -368 -193 -60 -67 -69 -94 -76 -237 -6 -106 -23 -189 -50 -230 -20 -31 -70 -175 -77 -222 -8 -48 6 -93 28 -93 26 0 71 -53 95 -109 21 -51 21 -56 5 -67 -9 -7 -19 -30 -22 -52 -12 -86 105 -248 196 -272 58 -15 89 -8 156 35 49 31 55 39 55 69 0 18 7 39 15 46 28 23 18 74 -24 127 -53 67 -65 76 -159 113 -157 62 -175 87 -134 189 31 78 75 121 171 169 72 36 79 37 180 37 91 0 113 -3 154 -24 51 -25 67 -45 49 -63 -6 -6 -35 2 -87 28 -54 26 -95 39 -134 42 -156 11 -330 -116 -282 -207 17 -31 44 -41 175 -68 126 -25 158 -23 197 13 10 9 24 14 31 11 47 -16 67 67 28 116 -24 31 -116 67 -169 67 -43 0 -178 -64 -195 -93 -25 -40 46 -75 88 -44 18 13 21 12 35 -17 13 -25 23 -32 54 -34 45 -4 77 19 77 55 0 29 5 29 40 -1 l29 -24 -24 -22 c-13 -12 -40 -24 -62 -27 -46 -6 -261 40 -281 61 -54 53 37 159 165 192 74 19 119 12 214 -33 82 -39 129 -40 129 -4 0 24 -25 46 -84 71 -36 17 -70 22 -144 23 -93 2 -100 0 -176 -36 -109 -52 -146 -84 -184 -160 -37 -75 -41 -128 -13 -156 23 -23 180 -101 203 -101 18 0 76 -57 115 -113 23 -33 25 -41 14 -64 l-12 -26 -19 31 c-40 66 -204 160 -279 160 -51 1 -52 2 -75 64 -23 63 -51 96 -89 106 -31 8 -32 10 -31 65 1 59 23 125 81 247 34 71 37 83 44 210 4 81 13 150 22 170 8 19 41 60 73 91 54 51 97 76 234 137 70 31 185 45 322 40 104 -5 138 -11 217 -38 52 -17 104 -38 116 -46 43 -28 137 -213 170 -332 9 -31 19 -119 22 -195 l6 -138 -39 17 c-72 31 -116 37 -176 25 -31 -7 -68 -21 -82 -32 -29 -23 -34 -56 -11 -66 14 -5 14 -7 1 -22 -32 -36 -45 -96 -36 -164 5 -36 14 -75 19 -88 5 -13 9 -27 10 -31 1 -4 3 -13 5 -20 12 -42 27 -129 32 -187 6 -63 5 -70 -17 -92 l-24 -24 -3 23 c-4 27 -14 28 -37 2 -18 -20 -72 -29 -60 -10 10 16 -14 40 -41 40 -27 0 -41 -17 -25 -33 15 -15 14 -27 -3 -27 -14 0 -76 64 -76 79 0 5 10 20 21 35 26 33 18 45 -10 17 -34 -34 -27 -73 19 -115 22 -20 47 -36 55 -36 21 0 30 27 15 45 -15 18 -7 30 15 22 8 -4 15 -16 15 -27 0 -30 63 -28 85 3 15 21 16 21 15 2 -4 -34 -1 -36 29 -21 16 9 33 28 39 44 12 36 -8 189 -44 319 -31 113 -29 175 6 226 33 48 95 84 168 97 55 10 68 9 100 -7 26 -13 41 -28 49 -53 11 -31 12 -32 12 -9 1 14 -2 29 -6 33 -4 3 -8 70 -8 149 -2 130 -7 167 -37 267 -15 53 -74 174 -113 236 -38 59 -75 81 -210 124 -89 29 -304 36 -407 15z m607 -740 c-72 -15 -93 -23 -124 -47 -26 -20 -43 -16 -34 8 11 29 83 54 153 53 l65 -1 -60 -13z m-545 -76 c33 -14 52 -30 60 -49 15 -36 9 -74 -12 -78 -12 -2 -15 2 -11 16 11 44 -102 92 -149 63 -10 -6 -29 -11 -43 -11 -13 0 -43 -9 -65 -21 -46 -24 -73 -19 -68 13 2 16 21 32 66 55 78 40 148 44 222 12z m-70 -89 c0 -39 -37 -59 -75 -42 -27 13 -36 62 -11 62 9 0 12 -8 9 -24 -6 -29 20 -41 42 -20 11 12 12 20 5 35 -9 16 -7 19 10 19 16 0 20 -6 20 -30z m-40 -6 c0 -8 -7 -14 -15 -14 -17 0 -18 2 -9 24 7 18 24 12 24 -10z m130 11 c7 -8 8 -15 2 -15 -5 0 -15 7 -22 15 -7 8 -8 15 -2 15 5 0 15 -7 22 -15z m-435 -256 c22 -5 50 -11 62 -13 52 -8 213 -126 213 -156 0 -25 -230 4 -281 36 -28 17 -65 145 -41 144 4 0 25 -5 47 -11z m-31 -132 c29 -31 147 -60 243 -61 68 -1 73 -2 73 -23 0 -15 -16 -32 -57 -57 -96 -60 -172 -45 -246 50 -50 64 -77 120 -77 165 0 55 13 55 28 0 8 -28 24 -61 36 -74z"/>
        <path d="M2061 2806 c-12 -31 -30 -80 -41 -108 -35 -95 -40 -161 -19 -262 10 -50 17 -91 16 -92 -1 -2 -13 24 -26 57 -14 36 -29 59 -38 59 -8 0 -35 -14 -59 -32 -37 -26 -53 -31 -103 -32 -34 0 -65 4 -72 11 -6 6 -18 9 -25 6 -17 -6 -19 18 -3 34 7 7 17 4 34 -13 17 -17 35 -24 63 -24 45 0 62 14 62 51 0 43 -18 44 -22 2 -3 -33 -7 -38 -31 -41 -31 -4 -77 21 -77 41 0 7 9 18 20 25 17 11 20 10 20 -7 0 -25 18 -37 33 -22 8 8 8 14 -1 23 -7 7 -12 15 -12 20 0 11 126 1 150 -12 22 -12 50 1 50 23 0 7 -4 7 -12 -1 -7 -7 -21 -12 -32 -11 -20 0 -20 1 2 9 29 12 28 45 -3 75 -47 47 -172 26 -205 -34 -6 -12 -19 -21 -29 -21 -10 0 -25 -8 -34 -18 -17 -19 -23 -52 -9 -52 14 0 52 31 52 42 0 6 -8 4 -18 -5 -25 -23 -39 -21 -18 2 14 16 66 27 66 14 0 -2 -15 -17 -34 -33 -34 -30 -49 -61 -37 -76 8 -11 59 -18 138 -18 55 0 67 3 103 33 23 18 43 31 44 30 10 -11 46 -95 46 -105 0 -7 9 -21 20 -32 25 -24 34 -138 15 -219 -7 -32 -16 -83 -20 -113 -9 -67 -50 -174 -112 -288 -128 -237 -223 -438 -223 -474 0 -48 29 -121 80 -202 22 -35 68 -122 101 -192 69 -145 90 -174 130 -174 24 0 30 5 39 40 6 22 15 108 20 192 10 170 28 248 85 376 56 125 69 224 50 387 -7 72 -19 189 -24 260 -6 72 -22 175 -35 230 -14 55 -30 159 -37 231 -10 114 -10 150 6 275 18 152 18 210 -2 216 -6 2 -20 -21 -32 -51z m24 -102 c-29 -226 -19 -410 34 -634 12 -48 23 -140 26 -210 3 -69 10 -152 15 -185 15 -90 12 -243 -5 -308 -8 -32 -30 -92 -50 -135 -49 -109 -64 -182 -75 -350 -9 -153 -17 -209 -30 -217 -25 -15 -50 27 -253 417 -25 49 -42 95 -45 127 -4 46 0 58 45 138 27 49 55 104 63 123 8 19 23 51 35 70 29 48 118 222 150 293 15 34 35 118 50 205 24 141 25 150 10 227 -8 44 -21 105 -30 135 -25 92 -21 191 13 295 62 188 69 189 47 9z m-161 -125 c46 -37 31 -52 -54 -54 -61 -2 -66 -1 -30 5 l45 7 -43 1 c-28 1 -49 -4 -59 -13 -8 -9 -20 -14 -27 -12 -22 7 -10 42 23 64 44 30 108 31 145 2z m-139 -98 c3 -5 1 -12 -5 -16 -5 -3 -10 1 -10 9 0 18 6 21 15 7z"/>
        <path d="M1934 2271 c-16 -24 -40 -45 -64 -55 -46 -18 -70 -41 -70 -68 0 -26 69 -138 85 -138 27 0 81 48 102 90 12 25 22 38 23 30 0 -8 -38 -92 -85 -186 -47 -94 -87 -186 -91 -205 -4 -23 7 -7 31 46 19 44 63 134 96 200 59 119 60 121 64 219 2 55 0 94 -4 87 -6 -9 -11 -8 -21 4 -20 24 -38 18 -66 -24z m71 -54 c0 -88 -61 -187 -115 -187 -17 0 -70 89 -70 118 0 24 7 32 48 50 30 14 57 37 75 64 27 38 30 40 45 24 12 -11 17 -34 17 -69z"/>
        <path d="M1552 2098 c-19 -19 -14 -37 12 -44 34 -8 57 -2 70 19 8 14 8 20 -4 27 -21 13 -64 12 -78 -2z m68 -18 c0 -5 -16 -10 -35 -10 -19 0 -35 5 -35 10 0 6 16 10 35 10 19 0 35 -4 35 -10z"/>
        <path d="M1508 1506 c-46 -17 -88 -43 -88 -56 0 -37 145 -39 182 -3 l21 21 -26 26 c-30 29 -37 30 -89 12z m86 -29 c8 -14 8 -20 -4 -27 -20 -13 -150 -13 -150 0 0 5 17 19 38 30 44 24 100 22 116 -3z"/>
        <path d="M1548 943 c-26 -7 -42 -56 -30 -95 6 -18 18 -80 27 -138 43 -267 117 -415 239 -482 44 -24 75 -23 85 5 5 12 24 68 42 125 l32 103 -19 42 c-10 23 -42 67 -71 97 -59 61 -78 88 -149 208 -48 82 -103 143 -127 141 -7 -1 -19 -3 -29 -6z m74 -50 c19 -21 61 -81 93 -133 32 -52 89 -129 126 -172 86 -97 91 -119 54 -230 -42 -126 -43 -128 -63 -128 -44 0 -145 96 -186 178 -58 116 -126 471 -96 507 19 23 33 18 72 -22z"/>
        <path d="M643 522 c-125 -45 -223 -155 -223 -252 0 -68 27 -105 83 -115 41 -8 98 20 118 57 11 20 11 20 37 -5 58 -56 180 -88 217 -57 8 7 20 29 26 50 18 59 -10 138 -69 200 -40 41 -46 52 -38 70 7 16 5 26 -10 41 -29 28 -80 32 -141 11z m121 -15 c10 -7 16 -22 14 -33 -3 -15 -10 -18 -40 -16 -47 4 -71 -9 -98 -53 -17 -28 -21 -47 -18 -99 2 -63 1 -67 -32 -101 -40 -41 -92 -48 -131 -16 -20 16 -24 28 -23 74 0 44 6 64 33 105 34 53 102 111 162 137 43 18 110 19 133 2z m-26 -67 c11 0 5 -11 -20 -37 -21 -21 -46 -59 -58 -85 -12 -27 -24 -48 -27 -48 -3 0 -3 24 -1 54 5 62 48 132 75 122 8 -3 22 -6 31 -6z m89 -53 c22 -24 46 -61 53 -82 14 -43 9 -118 -11 -141 -27 -33 -154 2 -206 58 l-22 24 25 54 c26 56 88 130 110 130 6 0 29 -20 51 -43z"/>
        </g>
        </svg>
        </S>
        </>
    );
  }
  
  export default Picture;



