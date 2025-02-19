
const data = [
    // { ID: 1, time: 500, VO2: 1705.0, Age_Range: "30-39" },
    // { ID: 2, time: 501, VO2: 2262.0, Age_Range: "30-39" },
    // { ID: 3, time: 500, VO2: 2615.0, Age_Range: "10-19" },
    // { ID: 4, time: 500, VO2: 3120.0, Age_Range: "20-29" }
//   ];

    { ID: 1, time: 500, VO2: 1705.0, Age_Range: '30-39' },
    { ID: 2, time: 501, VO2: 2262.0, Age_Range: '30-39' },
    { ID: 3, time: 500, VO2: 2615.0, Age_Range: '10-19' },
    { ID: 4, time: 500, VO2: 3120.0, Age_Range: '20-29' },
    { ID: 5, time: 500, VO2: 2754.0, Age_Range: '20-29' },
    { ID: 6, time: 500, VO2: 2393.0, Age_Range: '20-29' },
    { ID: 7, time: 500, VO2: 2386.0, Age_Range: '20-29' },
    { ID: 8, time: 500, VO2: 2805.0, Age_Range: '30-39' },
    { ID: 9, time: 500, VO2: 2042.0, Age_Range: '20-29' },
    { ID: 10, time: 501, VO2: 3392.0, Age_Range: '20-29' },
    { ID: 11, time: 500, VO2: 1760.0, Age_Range: '10-19' },
    { ID: 12, time: 500, VO2: 3126.0, Age_Range: '20-29' },
    { ID: 13, time: 500, VO2: 1557.0, Age_Range: '30-39' },
    { ID: 14, time: 501, VO2: 2696.0, Age_Range: '10-19' },
    { ID: 15, time: 501, VO2: 3498.0, Age_Range: '20-29' },
    { ID: 16, time: 501, VO2: 2212.0, Age_Range: '10-19' },
    { ID: 17, time: 500, VO2: 2460.0, Age_Range: '10-19' },
    { ID: 18, time: 500, VO2: 2985.0, Age_Range: '30-39' },
    { ID: 19, time: 500, VO2: 1031.0, Age_Range: '20-29' },
    { ID: 20, time: 501, VO2: 2579.0, Age_Range: '20-29' },
    { ID: 21, time: 501, VO2: 2815.0, Age_Range: '20-29' },
    { ID: 22, time: 502, VO2: 2495.0, Age_Range: '20-29' },
    { ID: 23, time: 500, VO2: 2790.0, Age_Range: '10-19' },
    { ID: 24, time: 501, VO2: 2526.0, Age_Range: '20-29' },
    { ID: 25, time: 501, VO2: 2723.0, Age_Range: '20-29' },
    { ID: 26, time: 500, VO2: 2596.0, Age_Range: '20-29' },
    { ID: 27, time: 502, VO2: 2316.0, Age_Range: '30-39' },
    { ID: 28, time: 500, VO2: 2216.0, Age_Range: '20-29' },
    { ID: 29, time: 501, VO2: 2028.0, Age_Range: '30-39' },
    { ID: 30, time: 501, VO2: 2399.0, Age_Range: '30-39' },
    { ID: 31, time: 502, VO2: 2398.0, Age_Range: '20-29' },
    { ID: 32, time: 501, VO2: 2699.0, Age_Range: '20-29' },
    { ID: 33, time: 502, VO2: 2307.0, Age_Range: '30-39' },
    { ID: 34, time: 500, VO2: 2309.0, Age_Range: '30-39' },
    { ID: 35, time: 501, VO2: 2180.0, Age_Range: '30-39' },
    { ID: 36, time: 501, VO2: 2428.0, Age_Range: '30-39' },
    { ID: 37, time: 500, VO2: 2370.0, Age_Range: '30-39' },
    { ID: 38, time: 501, VO2: 2227.0, Age_Range: '20-29' },
    { ID: 39, time: 501, VO2: 2212.0, Age_Range: '30-39' },
    { ID: 40, time: 501, VO2: 2919.0, Age_Range: '10-19' },
    { ID: 41, time: 501, VO2: 2591.0, Age_Range: '20-29' },
    { ID: 42, time: 500, VO2: 2517.0, Age_Range: '40-49' },
    { ID: 43, time: 500, VO2: 2893.0, Age_Range: '30-39' },
    { ID: 44, time: 500, VO2: 2489.0, Age_Range: '20-29' },
    { ID: 45, time: 502, VO2: 2372.0, Age_Range: '30-39' },
    { ID: 46, time: 500, VO2: 2869.0, Age_Range: '40-49' },
    { ID: 47, time: 501, VO2: 2250.0, Age_Range: '20-29' },
    { ID: 48, time: 501, VO2: 1713.0, Age_Range: '20-29' },
    { ID: 49, time: 501, VO2: 2737.0, Age_Range: '40-49' },
    { ID: 50, time: 500, VO2: 2291.0, Age_Range: '20-29' },
    { ID: 51, time: 500, VO2: 1425.0, Age_Range: '20-29' },
    { ID: 52, time: 501, VO2: 2074.0, Age_Range: '20-29' },
    { ID: 53, time: 501, VO2: 2452.0, Age_Range: '20-29' },
    { ID: 54, time: 503, VO2: 2512.0, Age_Range: '40-49' },
    { ID: 55, time: 500, VO2: 2561.0, Age_Range: '30-39' },
    { ID: 56, time: 500, VO2: 2654.0, Age_Range: '40-49' },
    { ID: 57, time: 500, VO2: 2526.0, Age_Range: '20-29' },
    { ID: 58, time: 500, VO2: 2985.0, Age_Range: '20-29' },
    { ID: 59, time: 503, VO2: 2929.0, Age_Range: '20-29' },
    { ID: 60, time: 501, VO2: 2669.0, Age_Range: '20-29' },
    { ID: 61, time: 500, VO2: 2901.0, Age_Range: '20-29' },
    { ID: 62, time: 501, VO2: 3106.0, Age_Range: '10-19' },
    { ID: 63, time: 500, VO2: 3061.0, Age_Range: '20-29' },
    { ID: 64, time: 500, VO2: 2963.0, Age_Range: '20-29' },
    { ID: 65, time: 500, VO2: 3605.0, Age_Range: '20-29' },
    { ID: 66, time: 500, VO2: 3022.0, Age_Range: '20-29' },
    { ID: 67, time: 500, VO2: 2704.0, Age_Range: '10-19' },
    { ID: 68, time: 500, VO2: 2057.0, Age_Range: '10-19' },
    { ID: 69, time: 500, VO2: 2623.0, Age_Range: '20-29' },
    { ID: 70, time: 500, VO2: 2453.0, Age_Range: '20-29' },
    { ID: 71, time: 500, VO2: 2830.0, Age_Range: '20-29' },
    { ID: 72, time: 500, VO2: 2734.0, Age_Range: '30-39' },
    { ID: 74, time: 501, VO2: 2745.0, Age_Range: '20-29' },
    { ID: 75, time: 500, VO2: 2676.0, Age_Range: '10-19' },
    { ID: 76, time: 500, VO2: 2819.0, Age_Range: '30-39' },
    { ID: 77, time: 501, VO2: 2945.0, Age_Range: '10-19' },
    { ID: 78, time: 501, VO2: 2525.0, Age_Range: '20-29' },
    { ID: 79, time: 501, VO2: 2831.0, Age_Range: '10-19' },
    { ID: 80, time: 500, VO2: 2991.0, Age_Range: '20-29' },
    { ID: 81, time: 501, VO2: 2382.0, Age_Range: '20-29' },
    { ID: 82, time: 501, VO2: 2901.0, Age_Range: '20-29' },
    { ID: 83, time: 500, VO2: 2423.0, Age_Range: '20-29' },
    { ID: 84, time: 501, VO2: 3218.0, Age_Range: '20-29' },
    { ID: 85, time: 500, VO2: 2436.0, Age_Range: '20-29' },
    { ID: 86, time: 500, VO2: 2296.0, Age_Range: '10-19' },
    { ID: 87, time: 501, VO2: 3125.0, Age_Range: '20-29' },
    { ID: 88, time: 500, VO2: 3379.0, Age_Range: '30-39' },
    { ID: 89, time: 501, VO2: 2729.0, Age_Range: '20-29' },
    { ID: 90, time: 500, VO2: 2271.0, Age_Range: '20-29' },
    { ID: 91, time: 502, VO2: 2507.0, Age_Range: '30-39' },
    { ID: 92, time: 501, VO2: 2364.0, Age_Range: '30-39' },
    { ID: 93, time: 502, VO2: 2616.0, Age_Range: '20-29' },
    { ID: 94, time: 500, VO2: 2803.0, Age_Range: '10-19' },
    { ID: 95, time: 500, VO2: 2251.0, Age_Range: '30-39' },
    { ID: 96, time: 500, VO2: 2766.0, Age_Range: '20-29' },
    { ID: 97, time: 500, VO2: 1701.0, Age_Range: '20-29' },
    { ID: 98, time: 500, VO2: 2718.0, Age_Range: '30-39' },
    { ID: 99, time: 500, VO2: 1998.0, Age_Range: '30-39' },
    { ID: 100, time: 500, VO2: 2592.0, Age_Range: '40-49' },
    { ID: 101, time: 500, VO2: 2348.0, Age_Range: '40-49' },
    { ID: 102, time: 501, VO2: 3354.0, Age_Range: '30-39' },
    { ID: 103, time: 500, VO2: 3333.0, Age_Range: '30-39' },
    { ID: 104, time: 501, VO2: 2439.0, Age_Range: '30-39' },
    { ID: 105, time: 501, VO2: 2550.0, Age_Range: '10-19' },
    { ID: 106, time: 502, VO2: 2457.0, Age_Range: '20-29' },
    { ID: 107, time: 501, VO2: 3047.0, Age_Range: '30-39' },
    { ID: 108, time: 501, VO2: 2366.0, Age_Range: '10-19' },
    { ID: 109, time: 500, VO2: 2142.0, Age_Range: '10-19' },
    { ID: 110, time: 501, VO2: 2058.0, Age_Range: '10-19' },
    { ID: 111, time: 501, VO2: 2335.0, Age_Range: '10-19' },
    { ID: 112, time: 500, VO2: 2134.0, Age_Range: '10-19' },
    { ID: 113, time: 501, VO2: 2371.0, Age_Range: '20-29' },
    { ID: 114, time: 500, VO2: 2477.0, Age_Range: '20-29' },
    { ID: 115, time: 500, VO2: 2033.0, Age_Range: '30-39' },
    { ID: 116, time: 500, VO2: 2388.0, Age_Range: '10-19' },
    { ID: 117, time: 500, VO2: 2606.0, Age_Range: '10-19' },
    { ID: 118, time: 501, VO2: 2913.0, Age_Range: '10-19' },
    { ID: 119, time: 500, VO2: 2778.0, Age_Range: '10-19' },
    { ID: 120, time: 501, VO2: 2813.0, Age_Range: '10-19' },
    { ID: 121, time: 501, VO2: 3449.0, Age_Range: '10-19' },
    { ID: 122, time: 501, VO2: 2720.0, Age_Range: '10-19' },
    { ID: 123, time: 500, VO2: 2752.0, Age_Range: '10-19' },
    { ID: 124, time: 500, VO2: 3333.0, Age_Range: '10-19' },
    { ID: 125, time: 501, VO2: 2925.0, Age_Range: '10-19' },
    { ID: 126, time: 500, VO2: 2564.0, Age_Range: '10-19' },
    { ID: 127, time: 500, VO2: 2892.0, Age_Range: '10-19' },
    { ID: 128, time: 501, VO2: 2549.0, Age_Range: '30-39' },
    { ID: 129, time: 501, VO2: 2858.0, Age_Range: '30-39' },
    { ID: 130, time: 500, VO2: 2344.0, Age_Range: '30-39' },
    { ID: 131, time: 501, VO2: 2765.0, Age_Range: '20-29' },
    { ID: 132, time: 500, VO2: 2277.0, Age_Range: '10-19' },
    { ID: 133, time: 501, VO2: 2303.0, Age_Range: '10-19' },
    { ID: 134, time: 500, VO2: 2927.0, Age_Range: '10-19' },
    { ID: 135, time: 501, VO2: 2935.0, Age_Range: '20-29' },
    { ID: 136, time: 500, VO2: 2038.0, Age_Range: '40-49' },
    { ID: 137, time: 501, VO2: 1920.0, Age_Range: '30-39' },
    { ID: 138, time: 501, VO2: 2821.0, Age_Range: '40-49' },
    { ID: 139, time: 501, VO2: 2806.0, Age_Range: '30-39' },
    { ID: 140, time: 500, VO2: 1280.0, Age_Range: '20-29' },
    { ID: 141, time: 501, VO2: 2310.0, Age_Range: '30-39' },
    { ID: 142, time: 500, VO2: 994.0, Age_Range: '30-39' },
    { ID: 143, time: 500, VO2: 2384.0, Age_Range: '20-29' },
    { ID: 144, time: 500, VO2: 2354.0, Age_Range: '40-49' },
    { ID: 145, time: 500, VO2: 2595.0, Age_Range: '20-29' },
    { ID: 146, time: 500, VO2: 2531.0, Age_Range: '20-29' },
    { ID: 147, time: 501, VO2: 2144.0, Age_Range: '30-39' },
    { ID: 148, time: 501, VO2: 2354.0, Age_Range: '40-49' },
    { ID: 149, time: 500, VO2: 2103.0, Age_Range: '30-39' },
    { ID: 150, time: 500, VO2: 2173.0, Age_Range: '30-39' },
    { ID: 151, time: 500, VO2: 1858.0, Age_Range: '30-39' },
    { ID: 152, time: 500, VO2: 2652.0, Age_Range: '30-39' },
    { ID: 153, time: 501, VO2: 2269.0, Age_Range: '30-39' },
    { ID: 154, time: 502, VO2: 3142.0, Age_Range: '40-49' },
    { ID: 155, time: 500, VO2: 2352.0, Age_Range: '30-39' },
    { ID: 156, time: 501, VO2: 2999.0, Age_Range: '30-39' },
    { ID: 157, time: 500, VO2: 2278.0, Age_Range: '20-29' },
    { ID: 158, time: 501, VO2: 2147.0, Age_Range: '20-29' },
    { ID: 159, time: 501, VO2: 2335.0, Age_Range: '40-49' },
    { ID: 160, time: 501, VO2: 2295.0, Age_Range: '20-29' },
    { ID: 161, time: 500, VO2: 2336.0, Age_Range: '20-29' },
    { ID: 162, time: 500, VO2: 2267.0, Age_Range: '20-29' },
    { ID: 163, time: 500, VO2: 2825.0, Age_Range: '20-29' },
    { ID: 164, time: 500, VO2: 2230.0, Age_Range: '20-29' },
    { ID: 165, time: 501, VO2: 2460.0, Age_Range: '20-29' },
    { ID: 166, time: 501, VO2: 2342.0, Age_Range: '20-29' },
    { ID: 167, time: 500, VO2: 2183.0, Age_Range: '20-29' },
    { ID: 168, time: 501, VO2: 2413.0, Age_Range: '10-19' },
    { ID: 169, time: 500, VO2: 2016.0, Age_Range: '20-29' },
    { ID: 170, time: 501, VO2: 2364.0, Age_Range: '20-29' },
    { ID: 171, time: 501, VO2: 1400.0, Age_Range: '30-39' },
    { ID: 172, time: 500, VO2: 2358.0, Age_Range: '20-29' },
    { ID: 173, time: 500, VO2: 2388.0, Age_Range: '20-29' },
    { ID: 174, time: 500, VO2: 2051.0, Age_Range: '20-29' },
    { ID: 175, time: 500, VO2: 1930.0, Age_Range: '20-29' },
    { ID: 176, time: 501, VO2: 2459.0, Age_Range: '30-39' },
    { ID: 177, time: 501, VO2: 2559.0, Age_Range: '10-19' },
    { ID: 178, time: 500, VO2: 2262.0, Age_Range: '10-19' },
    { ID: 179, time: 500, VO2: 2308.0, Age_Range: '10-19' },
    { ID: 182, time: 500, VO2: 3037.0, Age_Range: '20-29' },
    { ID: 183, time: 502, VO2: 2484.0, Age_Range: '20-29' },
    { ID: 184, time: 500, VO2: 2297.0, Age_Range: '30-39' },
    { ID: 185, time: 501, VO2: 2265.0, Age_Range: '20-29' },
    { ID: 186, time: 500, VO2: 2844.0, Age_Range: '40-49' },
    { ID: 187, time: 501, VO2: 2244.0, Age_Range: '20-29' },
    { ID: 188, time: 501, VO2: 3076.0, Age_Range: '20-29' },
    { ID: 189, time: 500, VO2: 2497.0, Age_Range: '10-19' },
    { ID: 190, time: 500, VO2: 3090.0, Age_Range: '20-29' },
    { ID: 191, time: 502, VO2: 2680.0, Age_Range: '30-39' },
    { ID: 192, time: 500, VO2: 2709.0, Age_Range: '20-29' },
    { ID: 193, time: 500, VO2: 3166.0, Age_Range: '20-29' },
    { ID: 194, time: 501, VO2: 2584.0, Age_Range: '30-39' },
    { ID: 195, time: 500, VO2: 2940.0, Age_Range: '20-29' },
    { ID: 196, time: 501, VO2: 2165.0, Age_Range: '30-39' },
    { ID: 197, time: 500, VO2: 3154.0, Age_Range: '30-39' },
    { ID: 198, time: 500, VO2: 2319.0, Age_Range: '20-29' },
    { ID: 199, time: 500, VO2: 2023.0, Age_Range: '20-29' },
    { ID: 200, time: 500, VO2: 2668.0, Age_Range: '30-39' },
    { ID: 201, time: 501, VO2: 2880.0, Age_Range: '20-29' },
    { ID: 202, time: 501, VO2: 2116.0, Age_Range: '40-49' },
    { ID: 203, time: 501, VO2: 2583.0, Age_Range: '40-49' },
    { ID: 204, time: 503, VO2: 2491.0, Age_Range: '30-39' },
    { ID: 205, time: 500, VO2: 2266.0, Age_Range: '10-19' },
    { ID: 206, time: 501, VO2: 2069.0, Age_Range: '30-39' },
    { ID: 207, time: 500, VO2: 2918.0, Age_Range: '30-39' },
    { ID: 208, time: 501, VO2: 2872.0, Age_Range: '40-49' },
    { ID: 209, time: 500, VO2: 1924.0, Age_Range: '30-39' },
    { ID: 210, time: 500, VO2: 2853.0, Age_Range: '30-39' },
    { ID: 211, time: 501, VO2: 3389.0, Age_Range: '30-39' },
    { ID: 212, time: 500, VO2: 2328.0, Age_Range: '30-39' },
    { ID: 213, time: 500, VO2: 2287.0, Age_Range: '40-49' },
    { ID: 214, time: 501, VO2: 2375.0, Age_Range: '20-29' },
    { ID: 215, time: 501, VO2: 1976.0, Age_Range: '30-39' },
    { ID: 216, time: 501, VO2: 1849.0, Age_Range: '20-29' },
    { ID: 217, time: 501, VO2: 2325.0, Age_Range: '20-29' },
    { ID: 218, time: 501, VO2: 2239.0, Age_Range: '40-49' },
    { ID: 219, time: 501, VO2: 3218.0, Age_Range: '20-29' },
    { ID: 220, time: 501, VO2: 2873.0, Age_Range: '20-29' },
    { ID: 221, time: 501, VO2: 3258.0, Age_Range: '20-29' },
    { ID: 222, time: 501, VO2: 2571.0, Age_Range: '10-19' },
    { ID: 223, time: 500, VO2: 2985.0, Age_Range: '10-19' },
    { ID: 224, time: 501, VO2: 1804.0, Age_Range: '10-19' },
    { ID: 225, time: 501, VO2: 1972.0, Age_Range: '40-49' },
    { ID: 226, time: 500, VO2: 3298.0, Age_Range: '20-29' },
    { ID: 227, time: 500, VO2: 3041.0, Age_Range: '10-19' },
    { ID: 228, time: 500, VO2: 2887.0, Age_Range: '10-19' },
    { ID: 229, time: 500, VO2: 2638.0, Age_Range: '30-39' },
    { ID: 230, time: 500, VO2: 2633.0, Age_Range: '50-59' },
    { ID: 231, time: 501, VO2: 1923.0, Age_Range: '40-49' },
    { ID: 232, time: 501, VO2: 2865.0, Age_Range: '30-39' },
    { ID: 234, time: 500, VO2: 2713.0, Age_Range: '40-49' },
    { ID: 235, time: 501, VO2: 1335.0, Age_Range: '30-39' },
    { ID: 237, time: 500, VO2: 1781.0, Age_Range: '30-39' },
    { ID: 238, time: 500, VO2: 3253.0, Age_Range: '40-49' },
    { ID: 239, time: 500, VO2: 2643.0, Age_Range: '20-29' },
    { ID: 240, time: 500, VO2: 2941.0, Age_Range: '40-49' },
    { ID: 241, time: 500, VO2: 2052.0, Age_Range: '40-49' },
    { ID: 242, time: 500, VO2: 2602.0, Age_Range: '50-59' },
    { ID: 243, time: 500, VO2: 3320.0, Age_Range: '20-29' },
    { ID: 244, time: 501, VO2: 1879.0, Age_Range: '30-39' },
    { ID: 245, time: 500, VO2: 1753.0, Age_Range: '50-59' },
    { ID: 246, time: 501, VO2: 3226.0, Age_Range: '50-59' },
    { ID: 247, time: 500, VO2: 2675.0, Age_Range: '30-39' },
    { ID: 248, time: 500, VO2: 2627.0, Age_Range: '20-29' },
    { ID: 249, time: 500, VO2: 3081.0, Age_Range: '30-39' },
    { ID: 250, time: 501, VO2: 2538.0, Age_Range: '30-39' },
    { ID: 251, time: 501, VO2: 2491.0, Age_Range: '20-29' },
    { ID: 252, time: 501, VO2: 2585.0, Age_Range: '20-29' },
    { ID: 253, time: 500, VO2: 2195.0, Age_Range: '30-39' },
    { ID: 254, time: 503, VO2: 2958.0, Age_Range: '30-39' },
    { ID: 255, time: 500, VO2: 2241.0, Age_Range: '20-29' },
    { ID: 256, time: 500, VO2: 2806.0, Age_Range: '30-39' },
    { ID: 257, time: 501, VO2: 2640.0, Age_Range: '20-29' },
    { ID: 258, time: 500, VO2: 2348.0, Age_Range: '40-49' },
    { ID: 259, time: 501, VO2: 2311.0, Age_Range: '40-49' },
    { ID: 260, time: 500, VO2: 2681.0, Age_Range: '30-39' },
    { ID: 261, time: 502, VO2: 3005.0, Age_Range: '20-29' },
    { ID: 262, time: 500, VO2: 2397.0, Age_Range: '20-29' },
    { ID: 263, time: 500, VO2: 1739.0, Age_Range: '20-29' },
    { ID: 264, time: 501, VO2: 2938.0, Age_Range: '20-29' },
    { ID: 265, time: 501, VO2: 2501.0, Age_Range: '20-29' },
    { ID: 266, time: 500, VO2: 3419.0, Age_Range: '40-49' },
    { ID: 267, time: 501, VO2: 3535.0, Age_Range: '40-49' },
    { ID: 268, time: 500, VO2: 2516.0, Age_Range: '30-39' },
    { ID: 269, time: 500, VO2: 2070.0, Age_Range: '10-19' },
    { ID: 270, time: 501, VO2: 2635.0, Age_Range: '40-49' },
    { ID: 271, time: 500, VO2: 3234.0, Age_Range: '30-39' },
    { ID: 272, time: 502, VO2: 2495.0, Age_Range: '30-39' },
    { ID: 273, time: 500, VO2: 2348.0, Age_Range: '40-49' },
    { ID: 274, time: 501, VO2: 2104.0, Age_Range: '10-19' },
    { ID: 275, time: 503, VO2: 2498.0, Age_Range: '30-39' },
    { ID: 276, time: 501, VO2: 2613.0, Age_Range: '30-39' },
    { ID: 277, time: 500, VO2: 2840.0, Age_Range: '50-59' },
    { ID: 278, time: 500, VO2: 2826.0, Age_Range: '40-49' },
    { ID: 279, time: 500, VO2: 2142.0, Age_Range: '40-49' },
    { ID: 280, time: 500, VO2: 2328.0, Age_Range: '50-59' },
    { ID: 281, time: 500, VO2: 2182.0, Age_Range: '20-29' },
    { ID: 282, time: 501, VO2: 2807.0, Age_Range: '30-39' },
    { ID: 283, time: 500, VO2: 2385.0, Age_Range: '30-39' },
    { ID: 284, time: 500, VO2: 3065.0, Age_Range: '10-19' },
    { ID: 285, time: 501, VO2: 2832.0, Age_Range: '20-29' },
    { ID: 286, time: 501, VO2: 2890.0, Age_Range: '20-29' },
    { ID: 287, time: 500, VO2: 2460.0, Age_Range: '10-19' },
    { ID: 288, time: 501, VO2: 2791.0, Age_Range: '20-29' },
    { ID: 289, time: 501, VO2: 2089.0, Age_Range: '20-29' },
    { ID: 290, time: 503, VO2: 2816.0, Age_Range: '20-29' },
    { ID: 291, time: 500, VO2: 2982.0, Age_Range: '20-29' },
    { ID: 292, time: 501, VO2: 2061.0, Age_Range: '30-39' },
    { ID: 293, time: 501, VO2: 1969.0, Age_Range: '30-39' },
    { ID: 294, time: 501, VO2: 1702.0, Age_Range: '20-29' },
    { ID: 295, time: 501, VO2: 2171.0, Age_Range: '10-19' },
    { ID: 297, time: 501, VO2: 2545.0, Age_Range: '40-49' },
    { ID: 298, time: 500, VO2: 2411.0, Age_Range: '10-19' },
    { ID: 299, time: 500, VO2: 2045.0, Age_Range: '10-19' },
    { ID: 300, time: 500, VO2: 3197.0, Age_Range: '40-49' },
    { ID: 301, time: 500, VO2: 2926.0, Age_Range: '20-29' },
    { ID: 302, time: 501, VO2: 2710.0, Age_Range: '10-19' },
    { ID: 303, time: 500, VO2: 2350.0, Age_Range: '10-19' },
    { ID: 304, time: 501, VO2: 2743.0, Age_Range: '10-19' },
    { ID: 305, time: 500, VO2: 3025.0, Age_Range: '20-29' },
    { ID: 306, time: 501, VO2: 2114.0, Age_Range: '10-19' },
    { ID: 307, time: 501, VO2: 2058.0, Age_Range: '10-19' },
    { ID: 308, time: 501, VO2: 1928.0, Age_Range: '40-49' },
    { ID: 309, time: 501, VO2: 3206.0, Age_Range: '10-19' },
    { ID: 310, time: 500, VO2: 2522.0, Age_Range: '30-39' },
    { ID: 311, time: 500, VO2: 1928.0, Age_Range: '20-29' },
    { ID: 312, time: 500, VO2: 2026.0, Age_Range: '10-19' },
    { ID: 313, time: 500, VO2: 2131.0, Age_Range: '10-19' },
    { ID: 314, time: 500, VO2: 2615.0, Age_Range: '40-49' },
    { ID: 315, time: 500, VO2: 2906.0, Age_Range: '30-39' },
    { ID: 316, time: 500, VO2: 2017.0, Age_Range: '20-29' },
    { ID: 317, time: 501, VO2: 2205.0, Age_Range: '30-39' },
    { ID: 318, time: 501, VO2: 2626.0, Age_Range: '40-49' },
    { ID: 319, time: 501, VO2: 2793.0, Age_Range: '30-39' },
    { ID: 320, time: 501, VO2: 2518.0, Age_Range: '30-39' },
    { ID: 321, time: 500, VO2: 2276.0, Age_Range: '30-39' },
    { ID: 322, time: 500, VO2: 2927.0, Age_Range: '20-29' },
    { ID: 323, time: 501, VO2: 2244.0, Age_Range: '20-29' },
    { ID: 324, time: 500, VO2: 1798.0, Age_Range: '20-29' },
    { ID: 325, time: 500, VO2: 2545.0, Age_Range: '50-59' },
    { ID: 326, time: 501, VO2: 3482.0, Age_Range: '20-29' },
    { ID: 327, time: 500, VO2: 2776.0, Age_Range: '20-29' },
    { ID: 328, time: 500, VO2: 3124.0, Age_Range: '30-39' },
    { ID: 329, time: 500, VO2: 2516.0, Age_Range: '30-39' },
    { ID: 330, time: 500, VO2: 2231.0, Age_Range: '10-19' },
    { ID: 331, time: 500, VO2: 2020.0, Age_Range: '10-19' },
    { ID: 332, time: 500, VO2: 2596.0, Age_Range: '10-19' },
    { ID: 333, time: 500, VO2: 2268.0, Age_Range: '10-19' },
    { ID: 334, time: 500, VO2: 2447.0, Age_Range: '10-19' },
    { ID: 335, time: 501, VO2: 2462.0, Age_Range: '10-19' },
    { ID: 336, time: 501, VO2: 1661.0, Age_Range: '10-19' },
    { ID: 337, time: 500, VO2: 2682.0, Age_Range: '20-29' },
    { ID: 338, time: 501, VO2: 1824.0, Age_Range: '10-19' },
    { ID: 339, time: 500, VO2: 2155.0, Age_Range: '10-19' },
    { ID: 340, time: 500, VO2: 2585.0, Age_Range: '10-19' },
    { ID: 341, time: 500, VO2: 1875.0, Age_Range: '10-19' },
    { ID: 342, time: 500, VO2: 2360.0, Age_Range: '10-19' },
    { ID: 343, time: 501, VO2: 1974.0, Age_Range: '10-19' },
    { ID: 344, time: 501, VO2: 2254.0, Age_Range: '10-19' },
    { ID: 345, time: 501, VO2: 3198.0, Age_Range: '40-49' },
    { ID: 346, time: 501, VO2: 1987.0, Age_Range: '10-19' },
    { ID: 347, time: 502, VO2: 2168.0, Age_Range: '10-19' },
    { ID: 348, time: 500, VO2: 2502.0, Age_Range: '10-19' },
    { ID: 349, time: 500, VO2: 1318.0, Age_Range: '10-19' },
    { ID: 350, time: 500, VO2: 2547.0, Age_Range: '10-19' },
    { ID: 351, time: 501, VO2: 1329.0, Age_Range: '20-29' },
    { ID: 352, time: 500, VO2: 2536.0, Age_Range: '40-49' },
    { ID: 353, time: 500, VO2: 2436.0, Age_Range: '20-29' },
    { ID: 354, time: 500, VO2: 2150.0, Age_Range: '10-19' },
    { ID: 355, time: 501, VO2: 2714.0, Age_Range: '10-19' },
    { ID: 356, time: 501, VO2: 2017.0, Age_Range: '30-39' },
    { ID: 357, time: 501, VO2: 2313.0, Age_Range: '10-19' },
    { ID: 358, time: 500, VO2: 3175.0, Age_Range: '30-39' },
    { ID: 359, time: 500, VO2: 2398.0, Age_Range: '50-59' },
    { ID: 360, time: 501, VO2: 2619.0, Age_Range: '30-39' },
    { ID: 361, time: 501, VO2: 2573.0, Age_Range: '10-19' },
    { ID: 362, time: 500, VO2: 2758.0, Age_Range: '10-19' },
    { ID: 363, time: 500, VO2: 2341.0, Age_Range: '40-49' },
    { ID: 364, time: 500, VO2: 2448.0, Age_Range: '20-29' },
    { ID: 365, time: 500, VO2: 3619.0, Age_Range: '20-29' },
    { ID: 366, time: 500, VO2: 3386.0, Age_Range: '30-39' },
    { ID: 367, time: 500, VO2: 1777.0, Age_Range: '40-49' },
    { ID: 368, time: 501, VO2: 2913.0, Age_Range: '20-29' },
    { ID: 369, time: 501, VO2: 2318.0, Age_Range: '20-29' },
    { ID: 370, time: 502, VO2: 2126.0, Age_Range: '20-29' },
    { ID: 371, time: 501, VO2: 2714.0, Age_Range: '20-29' },
    { ID: 372, time: 502, VO2: 2685.0, Age_Range: '30-39' },
    { ID: 373, time: 500, VO2: 2340.0, Age_Range: '20-29' },
    { ID: 374, time: 500, VO2: 2491.0, Age_Range: '20-29' },
    { ID: 375, time: 502, VO2: 2422.0, Age_Range: '20-29' },
    { ID: 376, time: 500, VO2: 3369.0, Age_Range: '40-49' },
    { ID: 377, time: 501, VO2: 880.0, Age_Range: '50-59' },
    { ID: 378, time: 500, VO2: 2671.0, Age_Range: '20-29' },
    { ID: 379, time: 500, VO2: 2785.0, Age_Range: '10-19' },
    { ID: 381, time: 500, VO2: 2711.0, Age_Range: '20-29' },
    { ID: 383, time: 500, VO2: 2929.0, Age_Range: '50-59' },
    { ID: 384, time: 500, VO2: 2199.0, Age_Range: '40-49' },
    { ID: 385, time: 500, VO2: 1959.0, Age_Range: '30-39' },
    { ID: 386, time: 500, VO2: 2578.0, Age_Range: '30-39' },
    { ID: 387, time: 501, VO2: 2743.0, Age_Range: '20-29' },
    { ID: 388, time: 500, VO2: 2966.0, Age_Range: '20-29' },
    { ID: 389, time: 501, VO2: 2308.0, Age_Range: '50-59' },
    { ID: 391, time: 502, VO2: 2529.0, Age_Range: '20-29' },
    { ID: 392, time: 500, VO2: 1179.0, Age_Range: '30-39' },
    { ID: 393, time: 501, VO2: 2199.0, Age_Range: '40-49' },
    { ID: 394, time: 503, VO2: 964.0, Age_Range: '40-49' },
    { ID: 395, time: 501, VO2: 801.0, Age_Range: '40-49' },
    { ID: 396, time: 501, VO2: 2019.0, Age_Range: '30-39' },
    { ID: 397, time: 501, VO2: 3519.0, Age_Range: '30-39' },
    { ID: 398, time: 501, VO2: 943.0, Age_Range: '40-49' },
    { ID: 399, time: 501, VO2: 957.0, Age_Range: '30-39' },
    { ID: 400, time: 500, VO2: 936.0, Age_Range: '40-49' },
    { ID: 401, time: 501, VO2: 1188.0, Age_Range: '30-39' },
    { ID: 402, time: 501, VO2: 3332.0, Age_Range: '40-49' },
    { ID: 403, time: 501, VO2: 1617.0, Age_Range: '20-29' },
    { ID: 404, time: 500, VO2: 2515.0, Age_Range: '20-29' },
    { ID: 405, time: 502, VO2: 1124.0, Age_Range: '50-59' },
    { ID: 406, time: 501, VO2: 2134.0, Age_Range: '20-29' },
    { ID: 407, time: 500, VO2: 2520.0, Age_Range: '20-29' },
    { ID: 408, time: 500, VO2: 2089.0, Age_Range: '20-29' },
    { ID: 409, time: 500, VO2: 3612.0, Age_Range: '20-29' },
    { ID: 410, time: 500, VO2: 1853.0, Age_Range: '20-29' },
    { ID: 411, time: 500, VO2: 3050.0, Age_Range: '30-39' },
    { ID: 412, time: 500, VO2: 3466.0, Age_Range: '20-29' },
    { ID: 413, time: 502, VO2: 2657.0, Age_Range: '40-49' },
    { ID: 414, time: 500, VO2: 3081.0, Age_Range: '30-39' },
    { ID: 415, time: 500, VO2: 2250.0, Age_Range: '20-29' },
    { ID: 416, time: 501, VO2: 1873.0, Age_Range: '20-29' },
    { ID: 417, time: 502, VO2: 2156.0, Age_Range: '20-29' },
    { ID: 418, time: 500, VO2: 2645.0, Age_Range: '20-29' },
    { ID: 419, time: 501, VO2: 1948.0, Age_Range: '20-29' },
    { ID: 420, time: 500, VO2: 2360.0, Age_Range: '10-19' },
    { ID: 421, time: 501, VO2: 2943.0, Age_Range: '40-49' },
    { ID: 423, time: 500, VO2: 2798.0, Age_Range: '30-39' },
    { ID: 424, time: 501, VO2: 2902.0, Age_Range: '20-29' },
    { ID: 425, time: 501, VO2: 2697.0, Age_Range: '20-29' },
    { ID: 426, time: 502, VO2: 1897.0, Age_Range: '40-49' },
    { ID: 429, time: 502, VO2: 2135.0, Age_Range: '20-29' },
    { ID: 430, time: 502, VO2: 3092.0, Age_Range: '30-39' },
    { ID: 431, time: 500, VO2: 2249.0, Age_Range: '10-19' },
    { ID: 432, time: 502, VO2: 2107.0, Age_Range: '40-49' },
    { ID: 433, time: 500, VO2: 2402.0, Age_Range: '40-49' },
    { ID: 434, time: 500, VO2: 1562.0, Age_Range: '40-49' },
    { ID: 435, time: 500, VO2: 2044.0, Age_Range: '20-29' },
    { ID: 436, time: 500, VO2: 2323.0, Age_Range: '20-29' },
    { ID: 437, time: 500, VO2: 1898.0, Age_Range: '20-29' },
    { ID: 438, time: 500, VO2: 2975.0, Age_Range: '30-39' },
    { ID: 439, time: 500, VO2: 1817.0, Age_Range: '10-19' },
    { ID: 440, time: 501, VO2: 2620.0, Age_Range: '10-19' },
    { ID: 441, time: 501, VO2: 2295.0, Age_Range: '10-19' },
    { ID: 442, time: 501, VO2: 2197.0, Age_Range: '20-29' },
    { ID: 443, time: 500, VO2: 2255.0, Age_Range: '20-29' },
    { ID: 444, time: 501, VO2: 2110.0, Age_Range: '20-29' },
    { ID: 445, time: 500, VO2: 3173.0, Age_Range: '10-19' },
    { ID: 446, time: 501, VO2: 2188.0, Age_Range: '10-19' },
    { ID: 447, time: 501, VO2: 2961.0, Age_Range: '20-29' },
    { ID: 448, time: 500, VO2: 2612.0, Age_Range: '30-39' },
    { ID: 449, time: 500, VO2: 2317.0, Age_Range: '30-39' },
    { ID: 450, time: 502, VO2: 2325.0, Age_Range: '40-49' },
    { ID: 451, time: 500, VO2: 3031.0, Age_Range: '20-29' },
    { ID: 452, time: 500, VO2: 2843.0, Age_Range: '20-29' },
    { ID: 453, time: 500, VO2: 2694.0, Age_Range: '20-29' },
    { ID: 454, time: 500, VO2: 2434.0, Age_Range: '20-29' },
    { ID: 455, time: 500, VO2: 2595.0, Age_Range: '20-29' },
    { ID: 456, time: 500, VO2: 2424.0, Age_Range: '20-29' },
    { ID: 457, time: 500, VO2: 1998.0, Age_Range: '10-19' },
    { ID: 458, time: 501, VO2: 3900.0, Age_Range: '20-29' },
    { ID: 459, time: 500, VO2: 2154.0, Age_Range: '20-29' },
    { ID: 460, time: 500, VO2: 2179.0, Age_Range: '20-29' },
    { ID: 461, time: 500, VO2: 2140.0, Age_Range: '20-29' },
    { ID: 462, time: 500, VO2: 2317.0, Age_Range: '40-49' },
    { ID: 463, time: 501, VO2: 2282.0, Age_Range: '30-39' },
    { ID: 464, time: 501, VO2: 1928.0, Age_Range: '20-29' },
    { ID: 465, time: 500, VO2: 2305.0, Age_Range: '20-29' },
    { ID: 466, time: 500, VO2: 1960.0, Age_Range: '10-19' },
    { ID: 467, time: 501, VO2: 2286.0, Age_Range: '30-39' },
    { ID: 468, time: 502, VO2: 1904.0, Age_Range: '20-29' },
    { ID: 469, time: 500, VO2: 2477.0, Age_Range: '10-19' },
    { ID: 470, time: 500, VO2: 2261.0, Age_Range: '10-19' },
    { ID: 471, time: 501, VO2: 2406.0, Age_Range: '20-29' },
    { ID: 472, time: 501, VO2: 2393.0, Age_Range: '30-39' },
    { ID: 473, time: 500, VO2: 1981.0, Age_Range: '20-29' },
    { ID: 474, time: 502, VO2: 2051.0, Age_Range: '20-29' },
    { ID: 475, time: 501, VO2: 3093.0, Age_Range: '20-29' },
    { ID: 476, time: 500, VO2: 2410.0, Age_Range: '20-29' },
    { ID: 477, time: 501, VO2: 2741.0, Age_Range: '10-19' },
    { ID: 478, time: 501, VO2: 2345.0, Age_Range: '20-29' },
    { ID: 479, time: 501, VO2: 1103.0, Age_Range: '20-29' },
    { ID: 480, time: 501, VO2: 2302.0, Age_Range: '20-29' },
    { ID: 481, time: 501, VO2: 1756.0, Age_Range: '20-29' },
    { ID: 482, time: 500, VO2: 1933.0, Age_Range: '10-19' },
    { ID: 483, time: 500, VO2: 2246.0, Age_Range: '20-29' },
    { ID: 484, time: 500, VO2: 2686.0, Age_Range: '10-19' },
    { ID: 485, time: 501, VO2: 2232.0, Age_Range: '40-49' },
    { ID: 486, time: 500, VO2: 1558.0, Age_Range: '40-49' },
    { ID: 487, time: 500, VO2: 1941.0, Age_Range: '30-39' },
    { ID: 488, time: 500, VO2: 2736.0, Age_Range: '20-29' },
    { ID: 489, time: 501, VO2: 3351.0, Age_Range: '30-39' },
    { ID: 490, time: 500, VO2: 2735.0, Age_Range: '30-39' },
    { ID: 491, time: 500, VO2: 2805.0, Age_Range: '20-29' },
    { ID: 492, time: 500, VO2: 2793.0, Age_Range: '30-39' },
    { ID: 493, time: 501, VO2: 2497.0, Age_Range: '20-29' },
    { ID: 494, time: 500, VO2: 2742.0, Age_Range: '20-29' },
    { ID: 495, time: 500, VO2: 2853.0, Age_Range: '20-29' },
    { ID: 496, time: 500, VO2: 3096.0, Age_Range: '20-29' },
    { ID: 497, time: 501, VO2: 3038.0, Age_Range: '20-29' },
    { ID: 498, time: 501, VO2: 3135.0, Age_Range: '30-39' },
    { ID: 499, time: 501, VO2: 3408.0, Age_Range: '20-29' },
    { ID: 500, time: 500, VO2: 2662.0, Age_Range: '20-29' },
    { ID: 501, time: 501, VO2: 2934.0, Age_Range: '10-19' },
    { ID: 502, time: 501, VO2: 2943.0, Age_Range: '20-29' },
    { ID: 503, time: 500, VO2: 1916.0, Age_Range: '10-19' },
    { ID: 504, time: 500, VO2: 2369.0, Age_Range: '20-29' },
    { ID: 505, time: 500, VO2: 2303.0, Age_Range: '20-29' },
    { ID: 506, time: 500, VO2: 1507.0, Age_Range: '40-49' },
    { ID: 507, time: 502, VO2: 2071.0, Age_Range: '20-29' },
    { ID: 508, time: 501, VO2: 2097.0, Age_Range: '20-29' },
    { ID: 509, time: 501, VO2: 2739.0, Age_Range: '10-19' },
    { ID: 510, time: 500, VO2: 2329.0, Age_Range: '20-29' },
    { ID: 511, time: 500, VO2: 2493.0, Age_Range: '10-19' },
    { ID: 512, time: 501, VO2: 2456.0, Age_Range: '20-29' },
    { ID: 513, time: 501, VO2: 1605.0, Age_Range: '20-29' },
    { ID: 514, time: 500, VO2: 1510.0, Age_Range: '20-29' },
    { ID: 515, time: 501, VO2: 2071.0, Age_Range: '10-19' },
    { ID: 516, time: 500, VO2: 1813.0, Age_Range: '10-19' },
    { ID: 517, time: 501, VO2: 2173.0, Age_Range: '20-29' },
    { ID: 518, time: 501, VO2: 2204.0, Age_Range: '20-29' },
    { ID: 519, time: 500, VO2: 2399.0, Age_Range: '30-39' },
    { ID: 520, time: 500, VO2: 3143.0, Age_Range: '30-39' },
    { ID: 521, time: 500, VO2: 1531.0, Age_Range: '30-39' },
    { ID: 522, time: 500, VO2: 1909.0, Age_Range: '20-29' },
    { ID: 523, time: 501, VO2: 2442.0, Age_Range: '10-19' },
    { ID: 524, time: 500, VO2: 3012.0, Age_Range: '10-19' },
    { ID: 525, time: 500, VO2: 2857.0, Age_Range: '20-29' },
    { ID: 526, time: 500, VO2: 2529.0, Age_Range: '10-19' },
    { ID: 527, time: 500, VO2: 2176.0, Age_Range: '20-29' },
    { ID: 528, time: 500, VO2: 3020.0, Age_Range: '20-29' },
    { ID: 529, time: 501, VO2: 2619.0, Age_Range: '10-19' },
    { ID: 530, time: 500, VO2: 2992.0, Age_Range: '20-29' },
    { ID: 531, time: 501, VO2: 2775.0, Age_Range: '20-29' },
    { ID: 532, time: 500, VO2: 2814.0, Age_Range: '20-29' },
    { ID: 533, time: 500, VO2: 2879.0, Age_Range: '20-29' },
    { ID: 534, time: 502, VO2: 2968.0, Age_Range: '20-29' },
    { ID: 535, time: 501, VO2: 2921.0, Age_Range: '20-29' },
    { ID: 536, time: 500, VO2: 2844.0, Age_Range: '20-29' },
    { ID: 537, time: 501, VO2: 2800.0, Age_Range: '20-29' },
    { ID: 538, time: 500, VO2: 2199.0, Age_Range: '20-29' },
    { ID: 539, time: 501, VO2: 999.0, Age_Range: '20-29' },
    { ID: 540, time: 500, VO2: 2921.0, Age_Range: '20-29' },
    { ID: 541, time: 501, VO2: 2255.0, Age_Range: '20-29' },
    { ID: 542, time: 502, VO2: 2594.0, Age_Range: '10-19' },
    { ID: 543, time: 501, VO2: 1773.0, Age_Range: '10-19' },
    { ID: 544, time: 500, VO2: 2976.0, Age_Range: '20-29' },
    { ID: 545, time: 500, VO2: 2997.0, Age_Range: '20-29' },
    { ID: 546, time: 502, VO2: 1728.0, Age_Range: '10-19' },
    { ID: 547, time: 500, VO2: 2480.0, Age_Range: '20-29' },
    { ID: 548, time: 500, VO2: 1857.0, Age_Range: '20-29' },
    { ID: 549, time: 500, VO2: 2281.0, Age_Range: '20-29' },
    { ID: 550, time: 500, VO2: 2523.0, Age_Range: '20-29' },
    { ID: 551, time: 501, VO2: 2992.0, Age_Range: '30-39' },
    { ID: 552, time: 500, VO2: 2748.0, Age_Range: '20-29' },
    { ID: 553, time: 500, VO2: 2713.0, Age_Range: '20-29' },
    { ID: 554, time: 500, VO2: 2825.0, Age_Range: '20-29' },
    { ID: 555, time: 501, VO2: 2919.0, Age_Range: '20-29' },
    { ID: 556, time: 500, VO2: 2498.0, Age_Range: '10-19' },
    { ID: 557, time: 500, VO2: 1313.0, Age_Range: '10-19' },
    { ID: 558, time: 500, VO2: 2598.0, Age_Range: '40-49' },
    { ID: 559, time: 500, VO2: 3429.0, Age_Range: '30-39' },
    { ID: 560, time: 501, VO2: 3243.0, Age_Range: '20-29' },
    { ID: 561, time: 500, VO2: 2971.0, Age_Range: '10-19' },
    { ID: 562, time: 501, VO2: 3094.0, Age_Range: '10-19' },
    { ID: 563, time: 500, VO2: 2246.0, Age_Range: '30-39' },
    { ID: 565, time: 501, VO2: 2272.0, Age_Range: '30-39' },
    { ID: 566, time: 500, VO2: 2637.0, Age_Range: '20-29' },
    { ID: 567, time: 500, VO2: 2111.0, Age_Range: '20-29' },
    { ID: 568, time: 500, VO2: 2251.0, Age_Range: '20-29' },
    { ID: 569, time: 501, VO2: 2714.0, Age_Range: '20-29' },
    { ID: 570, time: 500, VO2: 2793.0, Age_Range: '20-29' },
    { ID: 571, time: 500, VO2: 2352.0, Age_Range: '40-49' },
    { ID: 572, time: 502, VO2: 3385.0, Age_Range: '20-29' },
    { ID: 573, time: 500, VO2: 2645.0, Age_Range: '20-29' },
    { ID: 574, time: 501, VO2: 2969.0, Age_Range: '10-19' },
    { ID: 575, time: 500, VO2: 3694.0, Age_Range: '20-29' },
    { ID: 576, time: 500, VO2: 2313.0, Age_Range: '20-29' },
    { ID: 577, time: 500, VO2: 1390.0, Age_Range: '30-39' },
    { ID: 578, time: 501, VO2: 2355.0, Age_Range: '40-49' },
    { ID: 579, time: 501, VO2: 1931.0, Age_Range: '30-39' },
    { ID: 580, time: 501, VO2: 3728.0, Age_Range: '20-29' },
    { ID: 581, time: 501, VO2: 2472.0, Age_Range: '20-29' },
    { ID: 582, time: 500, VO2: 1795.0, Age_Range: '10-19' },
    { ID: 583, time: 500, VO2: 2470.0, Age_Range: '10-19' },
    { ID: 584, time: 500, VO2: 2852.0, Age_Range: '10-19' },
    { ID: 585, time: 500, VO2: 1160.0, Age_Range: '10-19' },
    { ID: 586, time: 500, VO2: 2656.0, Age_Range: '10-19' },
    { ID: 587, time: 500, VO2: 2559.0, Age_Range: '10-19' },
    { ID: 588, time: 501, VO2: 2422.0, Age_Range: '10-19' },
    { ID: 589, time: 500, VO2: 2936.0, Age_Range: '10-19' },
    { ID: 590, time: 501, VO2: 3534.0, Age_Range: '10-19' },
    { ID: 591, time: 500, VO2: 2403.0, Age_Range: '10-19' },
    { ID: 592, time: 501, VO2: 2924.0, Age_Range: '40-49' },
    { ID: 593, time: 500, VO2: 1935.0, Age_Range: '50-59' },
    { ID: 594, time: 501, VO2: 2316.0, Age_Range: '30-39' },
    { ID: 595, time: 500, VO2: 2084.0, Age_Range: '20-29' },

    { ID: 597, time: 501, VO2: 2219.0, Age_Range: '50-59' },
    { ID: 598, time: 501, VO2: 2051.0, Age_Range: '50-59' },
    { ID: 599, time: 500, VO2: 2500.0, Age_Range: '50-59' },
    { ID: 600, time: 500, VO2: 1899.0, Age_Range: '50-59' },
    { ID: 601, time: 502, VO2: 1254.0, Age_Range: '40-49' },
    { ID: 602, time: 502, VO2: 797.0, Age_Range: '40-49' },
    { ID: 603, time: 500, VO2: 1011.0, Age_Range: '40-49' },
    { ID: 604, time: 500, VO2: 1193.0, Age_Range: '50-59' },
    { ID: 605, time: 500, VO2: 1057.0, Age_Range: '40-49' },
    { ID: 606, time: 502, VO2: 2532.0, Age_Range: '40-49' },
    { ID: 607, time: 501, VO2: 2408.0, Age_Range: '10-19' },
    { ID: 608, time: 501, VO2: 1934.0, Age_Range: '40-49' },
    { ID: 609, time: 500, VO2: 1510.0, Age_Range: '40-49' },
    { ID: 610, time: 500, VO2: 2130.0, Age_Range: '40-49' },
    { ID: 611, time: 502, VO2: 2777.0, Age_Range: '30-39' },
    { ID: 612, time: 501, VO2: 1699.0, Age_Range: '20-29' },
    { ID: 613, time: 501, VO2: 1184.0, Age_Range: '40-49' },
    { ID: 614, time: 501, VO2: 1298.0, Age_Range: '40-49' },
    { ID: 615, time: 502, VO2: 2176.0, Age_Range: '40-49' },
    { ID: 616, time: 500, VO2: 2092.0, Age_Range: '40-49' },
    { ID: 617, time: 501, VO2: 1687.0, Age_Range: '30-39' },
    { ID: 618, time: 502, VO2: 1253.0, Age_Range: '30-39' },
    { ID: 619, time: 500, VO2: 2661.0, Age_Range: '40-49' },
    { ID: 620, time: 500, VO2: 2480.0, Age_Range: '40-49' },
    { ID: 621, time: 500, VO2: 2631.0, Age_Range: '40-49' },
    { ID: 622, time: 500, VO2: 1288.0, Age_Range: '30-39' },
    { ID: 623, time: 500, VO2: 2355.0, Age_Range: '40-49' },
    { ID: 624, time: 500, VO2: 2191.0, Age_Range: '30-39' },
    { ID: 625, time: 501, VO2: 1764.0, Age_Range: '30-39' },
    { ID: 626, time: 500, VO2: 2068.0, Age_Range: '30-39' },
    { ID: 627, time: 500, VO2: 959.0, Age_Range: '40-49' },
    { ID: 628, time: 500, VO2: 1782.0, Age_Range: '30-39' },
    { ID: 629, time: 501, VO2: 4736.0, Age_Range: '30-39' },
    { ID: 630, time: 500, VO2: 1378.0, Age_Range: '30-39' },
    { ID: 631, time: 501, VO2: 2770.0, Age_Range: '30-39' },
    { ID: 632, time: 502, VO2: 2386.0, Age_Range: '30-39' },
    { ID: 633, time: 502, VO2: 1852.0, Age_Range: '30-39' },
    { ID: 634, time: 500, VO2: 3709.0, Age_Range: '10-19' },
    { ID: 635, time: 500, VO2: 2478.0, Age_Range: '30-39' },
    { ID: 636, time: 502, VO2: 1959.0, Age_Range: '20-29' },
    { ID: 637, time: 500, VO2: 3693.0, Age_Range: '10-19' },
    { ID: 638, time: 501, VO2: 2168.0, Age_Range: '20-29' },
    { ID: 639, time: 502, VO2: 1108.0, Age_Range: '10-19' },
    { ID: 640, time: 500, VO2: 3066.0, Age_Range: '10-19' },
    { ID: 641, time: 501, VO2: 3225.0, Age_Range: '20-29' },
    { ID: 642, time: 501, VO2: 1624.0, Age_Range: '30-39' },
    { ID: 643, time: 501, VO2: 2805.0, Age_Range: '30-39' },
    { ID: 644, time: 501, VO2: 1896.0, Age_Range: '10-19' },
    { ID: 645, time: 501, VO2: 1455.0, Age_Range: '10-19' },
    { ID: 646, time: 502, VO2: 1667.0, Age_Range: '10-19' },
    { ID: 647, time: 500, VO2: 2025.0, Age_Range: '10-19' },
    { ID: 648, time: 501, VO2: 2433.0, Age_Range: '10-19' },
    { ID: 649, time: 501, VO2: 2806.0, Age_Range: '10-19' },
    { ID: 650, time: 500, VO2: 2302.0, Age_Range: '10-19' },
    { ID: 651, time: 500, VO2: 1579.0, Age_Range: '40-49' },
    { ID: 652, time: 500, VO2: 2105.0, Age_Range: '30-39' },
    { ID: 653, time: 501, VO2: 1272.0, Age_Range: '50-59' },
    { ID: 654, time: 502, VO2: 2636.0, Age_Range: '30-39' },
    { ID: 655, time: 501, VO2: 2684.0, Age_Range: '30-39' },
    { ID: 656, time: 500, VO2: 1426.0, Age_Range: '30-39' },
    { ID: 657, time: 501, VO2: 2833.0, Age_Range: '30-39' },
    { ID: 658, time: 501, VO2: 1887.0, Age_Range: '40-49' },
    { ID: 659, time: 501, VO2: 1776.0, Age_Range: '10-19' },
    { ID: 660, time: 502, VO2: 1697.0, Age_Range: '20-29' },
    { ID: 661, time: 501, VO2: 2332.0, Age_Range: '30-39' },
    { ID: 662, time: 500, VO2: 2803.0, Age_Range: '40-49' },
    { ID: 663, time: 500, VO2: 2526.0, Age_Range: '40-49' },
    { ID: 664, time: 500, VO2: 2353.0, Age_Range: '40-49' },
    { ID: 665, time: 500, VO2: 2303.0, Age_Range: '40-49' },
    { ID: 666, time: 502, VO2: 2452.0, Age_Range: '40-49' },
    { ID: 668, time: 500, VO2: 2874.0, Age_Range: '40-49' },
    { ID: 669, time: 500, VO2: 3135.0, Age_Range: '40-49' },
    { ID: 670, time: 500, VO2: 2626.0, Age_Range: '20-29' },
    { ID: 671, time: 502, VO2: 1592.0, Age_Range: '40-49' },
    { ID: 672, time: 502, VO2: 988.0, Age_Range: '40-49' },
    { ID: 673, time: 501, VO2: 1768.0, Age_Range: '10-19' },
    { ID: 674, time: 502, VO2: 1738.0, Age_Range: '20-29' },
    { ID: 675, time: 500, VO2: 2631.0, Age_Range: '40-49' },
    { ID: 676, time: 500, VO2: 2045.0, Age_Range: '30-39' },
    { ID: 677, time: 500, VO2: 2154.0, Age_Range: '40-49' },
    { ID: 678, time: 500, VO2: 1855.0, Age_Range: '30-39' },
    { ID: 679, time: 501, VO2: 1749.0, Age_Range: '30-39' },
    { ID: 680, time: 500, VO2: 2171.0, Age_Range: '30-39' },
    { ID: 681, time: 500, VO2: 2114.0, Age_Range: '30-39' },
    { ID: 682, time: 501, VO2: 1807.0, Age_Range: '40-49' },
    { ID: 683, time: 501, VO2: 3756.0, Age_Range: '20-29' },
    { ID: 684, time: 500, VO2: 1624.0, Age_Range: '30-39' },
    { ID: 685, time: 500, VO2: 2023.0, Age_Range: '30-39' },
    { ID: 686, time: 501, VO2: 2404.0, Age_Range: '20-29' },
    { ID: 687, time: 501, VO2: 2041.0, Age_Range: '20-29' },
    { ID: 688, time: 501, VO2: 1685.0, Age_Range: '20-29' },
    { ID: 689, time: 501, VO2: 2986.0, Age_Range: '20-29' },
    { ID: 690, time: 500, VO2: 1854.0, Age_Range: '20-29' },
    { ID: 691, time: 501, VO2: 2369.0, Age_Range: '40-49' },
    { ID: 692, time: 500, VO2: 2618.0, Age_Range: '30-39' },
    { ID: 693, time: 500, VO2: 2385.0, Age_Range: '10-19' },
    { ID: 694, time: 501, VO2: 1723.0, Age_Range: '20-29' },
    { ID: 695, time: 500, VO2: 1704.0, Age_Range: '20-29' },
    { ID: 696, time: 501, VO2: 2111.0, Age_Range: '20-29' },
    { ID: 697, time: 500, VO2: 3221.0, Age_Range: '20-29' },
    { ID: 698, time: 500, VO2: 2222.0, Age_Range: '20-29' },
    { ID: 699, time: 500, VO2: 1724.0, Age_Range: '30-39' },
    { ID: 700, time: 502, VO2: 1642.0, Age_Range: '30-39' },
    { ID: 701, time: 500, VO2: 1899.0, Age_Range: '10-19' },
    { ID: 702, time: 500, VO2: 1871.0, Age_Range: '40-49' },
    { ID: 703, time: 500, VO2: 1992.0, Age_Range: '30-39' },
    { ID: 704, time: 500, VO2: 2176.0, Age_Range: '20-29' },
    { ID: 705, time: 502, VO2: 1776.0, Age_Range: '30-39' },
    { ID: 706, time: 501, VO2: 1985.0, Age_Range: '30-39' },
    { ID: 707, time: 504, VO2: 1798.0, Age_Range: '30-39' },
    { ID: 708, time: 501, VO2: 1720.0, Age_Range: '20-29' },
    { ID: 709, time: 500, VO2: 2363.0, Age_Range: '30-39' },
    { ID: 710, time: 500, VO2: 3192.0, Age_Range: '30-39' },
    { ID: 711, time: 500, VO2: 1700.0, Age_Range: '30-39' },
    { ID: 712, time: 500, VO2: 2055.0, Age_Range: '30-39' },
    { ID: 713, time: 501, VO2: 2944.0, Age_Range: '20-29' },
    { ID: 714, time: 500, VO2: 991.0, Age_Range: '20-29' },
    { ID: 715, time: 500, VO2: 1727.0, Age_Range: '30-39' },
    { ID: 716, time: 501, VO2: 1769.0, Age_Range: '40-49' },
    { ID: 717, time: 501, VO2: 2318.0, Age_Range: '30-39' },
    { ID: 718, time: 501, VO2: 2169.0, Age_Range: '30-39' },
    { ID: 719, time: 502, VO2: 3497.0, Age_Range: '30-39' },
    { ID: 720, time: 500, VO2: 972.0, Age_Range: '30-39' },
    { ID: 721, time: 501, VO2: 2470.0, Age_Range: '30-39' },
    { ID: 722, time: 500, VO2: 2570.0, Age_Range: '30-39' },
    { ID: 723, time: 502, VO2: 875.0, Age_Range: '30-39' },
    { ID: 724, time: 501, VO2: 2101.0, Age_Range: '20-29' },
    { ID: 725, time: 500, VO2: 982.0, Age_Range: '20-29' },
    { ID: 726, time: 501, VO2: 2103.0, Age_Range: '20-29' },
    { ID: 727, time: 502, VO2: 2421.0, Age_Range: '20-29' },
    { ID: 728, time: 500, VO2: 1329.0, Age_Range: '10-19' },
    { ID: 729, time: 500, VO2: 1854.0, Age_Range: '10-19' },
    { ID: 730, time: 501, VO2: 1335.0, Age_Range: '30-39' },
    { ID: 731, time: 503, VO2: 1289.0, Age_Range: '20-29' },
    { ID: 732, time: 501, VO2: 2053.0, Age_Range: '20-29' },
    { ID: 733, time: 500, VO2: 2091.0, Age_Range: '20-29' },
    { ID: 734, time: 501, VO2: 2889.0, Age_Range: '40-49' },
    { ID: 735, time: 508, VO2: 1193.0, Age_Range: '20-29' },
    { ID: 736, time: 500, VO2: 2057.0, Age_Range: '40-49' },
    { ID: 737, time: 503, VO2: 1468.0, Age_Range: '30-39' },
    { ID: 738, time: 500, VO2: 3161.0, Age_Range: '30-39' },
    { ID: 739, time: 501, VO2: 1173.0, Age_Range: '20-29' },
    { ID: 740, time: 500, VO2: 3481.0, Age_Range: '40-49' },
    { ID: 741, time: 500, VO2: 587.0, Age_Range: '20-29' },
    { ID: 742, time: 500, VO2: 2445.0, Age_Range: '30-39' },
    { ID: 743, time: 501, VO2: 2913.0, Age_Range: '10-19' },
    { ID: 744, time: 500, VO2: 2007.0, Age_Range: '30-39' },
    { ID: 745, time: 501, VO2: 1592.0, Age_Range: '30-39' },
    { ID: 746, time: 501, VO2: 2956.0, Age_Range: '30-39' },
    { ID: 747, time: 501, VO2: 1171.0, Age_Range: '30-39' },
    { ID: 748, time: 501, VO2: 1884.0, Age_Range: '30-39' },
    { ID: 749, time: 501, VO2: 1234.0, Age_Range: '30-39' },
    { ID: 750, time: 504, VO2: 1972.0, Age_Range: '30-39' },
    { ID: 751, time: 500, VO2: 1741.0, Age_Range: '30-39' },
    { ID: 752, time: 501, VO2: 2199.0, Age_Range: '30-39' },
    { ID: 753, time: 500, VO2: 2682.0, Age_Range: '30-39' },
    { ID: 754, time: 501, VO2: 2722.0, Age_Range: '20-29' },
    { ID: 755, time: 501, VO2: 2238.0, Age_Range: '50-59' },
    { ID: 756, time: 500, VO2: 1041.0, Age_Range: '50-59' },
    { ID: 757, time: 501, VO2: 2110.0, Age_Range: '30-39' },
    { ID: 758, time: 501, VO2: 2186.0, Age_Range: '30-39' },
    { ID: 759, time: 501, VO2: 1795.0, Age_Range: '30-39' },
    { ID: 760, time: 502, VO2: 1333.0, Age_Range: '30-39' },
    { ID: 761, time: 500, VO2: 2085.0, Age_Range: '30-39' },
    { ID: 762, time: 500, VO2: 2032.0, Age_Range: '30-39' },
    { ID: 763, time: 501, VO2: 2581.0, Age_Range: '30-39' },
    { ID: 764, time: 500, VO2: 2767.0, Age_Range: '30-39' },
    { ID: 765, time: 506, VO2: 1795.0, Age_Range: '30-39' },
    { ID: 766, time: 501, VO2: 3067.0, Age_Range: '30-39' },
    { ID: 767, time: 503, VO2: 2072.0, Age_Range: '30-39' },
    { ID: 768, time: 501, VO2: 1529.0, Age_Range: '30-39' },
    { ID: 769, time: 500, VO2: 2835.0, Age_Range: '30-39' },
    { ID: 770, time: 501, VO2: 1884.0, Age_Range: '30-39' },
    { ID: 771, time: 500, VO2: 2847.0, Age_Range: '20-29' },
    { ID: 772, time: 500, VO2: 1795.0, Age_Range: '30-39' },
    { ID: 773, time: 500, VO2: 1835.0, Age_Range: '20-29' },
    { ID: 774, time: 500, VO2: 2363.0, Age_Range: '20-29' },
    { ID: 775, time: 500, VO2: 2315.0, Age_Range: '20-29' },
    { ID: 776, time: 501, VO2: 2094.0, Age_Range: '30-39' },
    { ID: 777, time: 501, VO2: 1618.0, Age_Range: '30-39' },
    { ID: 778, time: 500, VO2: 2549.0, Age_Range: '20-29' },
    { ID: 779, time: 500, VO2: 2484.0, Age_Range: '40-49' },
    { ID: 780, time: 501, VO2: 1236.0, Age_Range: '30-39' },
    { ID: 781, time: 501, VO2: 1390.0, Age_Range: '30-39' },
    { ID: 782, time: 501, VO2: 2382.0, Age_Range: '10-19' },
    { ID: 783, time: 500, VO2: 3493.0, Age_Range: '20-29' },
    { ID: 784, time: 500, VO2: 1751.0, Age_Range: '20-29' },
    { ID: 785, time: 500, VO2: 3352.0, Age_Range: '20-29' },
    { ID: 786, time: 500, VO2: 2275.0, Age_Range: '20-29' },
    { ID: 787, time: 501, VO2: 1727.0, Age_Range: '20-29' },
    { ID: 788, time: 502, VO2: 2300.0, Age_Range: '20-29' },
    { ID: 789, time: 502, VO2: 1372.0, Age_Range: '20-29' },
    { ID: 790, time: 502, VO2: 2691.0, Age_Range: '20-29' },
    { ID: 791, time: 500, VO2: 1229.0, Age_Range: '30-39' },
    { ID: 792, time: 500, VO2: 2764.0, Age_Range: '10-19' },
    { ID: 793, time: 501, VO2: 2450.0, Age_Range: '10-19' },
    { ID: 794, time: 501, VO2: 2379.0, Age_Range: '10-19' },
    { ID: 795, time: 501, VO2: 1602.0, Age_Range: '10-19' },
    { ID: 796, time: 500, VO2: 2378.0, Age_Range: '30-39' },
    { ID: 797, time: 502, VO2: 1847.0, Age_Range: '20-29' },
    { ID: 798, time: 500, VO2: 1990.0, Age_Range: '20-29' },
    { ID: 799, time: 502, VO2: 1075.0, Age_Range: '20-29' },
    { ID: 800, time: 501, VO2: 1523.0, Age_Range: '20-29' },
    { ID: 801, time: 500, VO2: 2770.0, Age_Range: '20-29' },
    { ID: 802, time: 500, VO2: 2911.0, Age_Range: '10-19' },
    { ID: 803, time: 500, VO2: 1731.0, Age_Range: '10-19' },
    { ID: 804, time: 500, VO2: 3163.0, Age_Range: '20-29' },
    { ID: 805, time: 500, VO2: 3313.0, Age_Range: '20-29' },
    { ID: 806, time: 500, VO2: 2205.0, Age_Range: '20-29' },
    { ID: 807, time: 500, VO2: 1867.0, Age_Range: '40-49' },
    { ID: 808, time: 500, VO2: 3072.0, Age_Range: '10-19' },
    { ID: 809, time: 501, VO2: 1573.0, Age_Range: '20-29' },
    { ID: 810, time: 501, VO2: 1950.0, Age_Range: '20-29' },
    { ID: 811, time: 500, VO2: 2165.0, Age_Range: '10-19' },
    { ID: 812, time: 500, VO2: 2557.0, Age_Range: '20-29' },
    { ID: 813, time: 501, VO2: 1098.0, Age_Range: '10-19' },
    { ID: 814, time: 501, VO2: 2366.0, Age_Range: '10-19' },
    { ID: 815, time: 500, VO2: 2072.0, Age_Range: '10-19' },
    { ID: 816, time: 500, VO2: 848.0, Age_Range: '10-19' },
    { ID: 817, time: 500, VO2: 2973.0, Age_Range: '10-19' },
    { ID: 818, time: 501, VO2: 1992.0, Age_Range: '10-19' },
    { ID: 819, time: 500, VO2: 2232.0, Age_Range: '10-19' },
    { ID: 820, time: 500, VO2: 1703.0, Age_Range: '10-19' },
    { ID: 821, time: 501, VO2: 2820.0, Age_Range: '10-19' },
    { ID: 822, time: 501, VO2: 1958.0, Age_Range: '20-29' },
    { ID: 823, time: 501, VO2: 2884.0, Age_Range: '20-29' },
    { ID: 824, time: 501, VO2: 1475.0, Age_Range: '10-19' },
    { ID: 825, time: 501, VO2: 4189.0, Age_Range: '10-19' },
    { ID: 826, time: 500, VO2: 1095.0, Age_Range: '20-29' },
    { ID: 827, time: 500, VO2: 1637.0, Age_Range: '10-19' },
    { ID: 828, time: 500, VO2: 1130.0, Age_Range: '20-29' },
    { ID: 829, time: 500, VO2: 1763.0, Age_Range: '10-19' },
    { ID: 830, time: 501, VO2: 1937.0, Age_Range: '10-19' },
    { ID: 831, time: 501, VO2: 2347.0, Age_Range: '10-19' },
    { ID: 832, time: 501, VO2: 1020.0, Age_Range: '40-49' },
    { ID: 833, time: 502, VO2: 2801.0, Age_Range: '30-39' },
    { ID: 834, time: 501, VO2: 1823.0, Age_Range: '30-39' },
    { ID: 835, time: 500, VO2: 2657.0, Age_Range: '10-19' },
    { ID: 836, time: 500, VO2: 2251.0, Age_Range: '10-19' },
    { ID: 837, time: 505, VO2: 2328.0, Age_Range: '10-19' },
    { ID: 838, time: 500, VO2: 1957.0, Age_Range: '30-39' },
    { ID: 839, time: 500, VO2: 3089.0, Age_Range: '20-29' },
    { ID: 840, time: 500, VO2: 2355.0, Age_Range: '30-39' },
    { ID: 841, time: 503, VO2: 2011.0, Age_Range: '20-29' },
    { ID: 842, time: 500, VO2: 3900.0, Age_Range: '40-49' },
    { ID: 843, time: 501, VO2: 2757.0, Age_Range: '30-39' },
    { ID: 844, time: 500, VO2: 3972.0, Age_Range: '30-39' },
    { ID: 845, time: 501, VO2: 2266.0, Age_Range: '20-29' },
    { ID: 846, time: 501, VO2: 2625.0, Age_Range: '20-29' },
    { ID: 847, time: 500, VO2: 2073.0, Age_Range: '30-39' },
    { ID: 848, time: 500, VO2: 2747.0, Age_Range: '20-29' },
    { ID: 849, time: 500, VO2: 2346.0, Age_Range: '20-29' },
    { ID: 850, time: 502, VO2: 2249.0, Age_Range: '20-29' },
    { ID: 851, time: 500, VO2: 2560.0, Age_Range: '20-29' },
    { ID: 852, time: 501, VO2: 1900.0, Age_Range: '10-19' },
    { ID: 853, time: 506, VO2: 3058.0, Age_Range: '10-19' },
    { ID: 854, time: 502, VO2: 1596.0, Age_Range: '30-39' },
    { ID: 855, time: 500, VO2: 1792.0, Age_Range: '40-49' },
    { ID: 856, time: 500, VO2: 1982.0, Age_Range: '50-59' },
    { ID: 857, time: 500, VO2: 2520.0, Age_Range: '20-29' }
];
  
  const oddsData = {
    "30-39": {
      "10-19": { "30-39": "+107", "10-19": "-132" },
      "20-29": { "30-39": "+124", "20-29": "-154" },
      "40-49": { "30-39": "-113", "40-49": "-109" },
      "50-59": { "30-39": "-160", "50-59": "+129" }
    },
    "10-19": {
      "20-29": { "10-19": "+107", "20-29": "-132" },
      "40-49": { "10-19": "-134", "40-29": "+109" },
      "50-59": { "10-19": "-192", "50-59": "+153" }
    },
    "20-29": {
      "40-49": { "20-29": "-156", "40-49": "+126" },
      "50-59": { "20-29": "-222", "50-59": "+176" }
    },
    "40-49": {
      "50-59": { "40-49": "-153", "50-59": "+123" }
    }
  };
    
  let earnings = 0;
const betHistory = [];
let filteredBarData = [];

// For VO₂ running totals based on bets.
const ageRanges = Array.from(new Set(data.map(d => d.Age_Range)));
const ageRunningTotals = {};
ageRanges.forEach(range => (ageRunningTotals[range] = 0));
const vo2RunningData = [];

/***********************
 * Helper Functions
 ***********************/
function getClosestVO2(participantId) {
  return data.find(d => d.ID === participantId) || null;
}

function getRandomParticipants() {
  const p1 = Math.floor(Math.random() * data.length) + 1;
  let p2 = Math.floor(Math.random() * data.length) + 1;
  while (p2 === p1) {
    p2 = Math.floor(Math.random() * data.length) + 1;
  }
  return [p1, p2];
}

function getOdds(age1, age2) {
  if (oddsData[age1] && oddsData[age1][age2]) {
    return oddsData[age1][age2];
  } else if (oddsData[age2] && oddsData[age2][age1]) {
    return oddsData[age2][age1];
  }
  return null;
}

/***********************
 * Update Functions
 ***********************/
function updateParticipants() {
  const [p1Id, p2Id] = getRandomParticipants();
  const p1Data = getClosestVO2(p1Id);
  const p2Data = getClosestVO2(p2Id);

  // Update VO₂, Age, and Odds display.
  document.getElementById("vo2-1").textContent = p1Data.VO2;
  document.getElementById("vo2-2").textContent = p2Data.VO2;
  document.getElementById("age-1").textContent = p1Data.Age_Range;
  document.getElementById("age-2").textContent = p2Data.Age_Range;

  const odds = getOdds(p1Data.Age_Range, p2Data.Age_Range);
  if (odds) {
    document.getElementById("odds-1").textContent = odds[p1Data.Age_Range];
    document.getElementById("odds-2").textContent = odds[p2Data.Age_Range];
  } else {
    document.getElementById("odds-1").textContent = "-105";
    document.getElementById("odds-2").textContent = "-105";
  }
  return [p1Id, p2Id, p1Data.VO2, p2Data.VO2, p1Data, p2Data];
}

function updateFilteredBarData() {
  const showP1 = document.getElementById("filter-participant1").checked;
  const showP2 = document.getElementById("filter-participant2").checked;
  filteredBarData = betHistory.filter(
    d => (d.participant === "1" && showP1) || (d.participant === "2" && showP2)
  );
}

/***********************
 * Chart Update Functions
 ***********************/
// 1. Bet History Bar Chart (First Graph)
//    Now shows "Bet Number" (x-axis) and "Amount Won" (y-axis).
function updateBarChart() {
  updateFilteredBarData();
  const svg = d3.select("#chart svg");
  const width = +svg.attr("width");
  const height = +svg.attr("height");
  svg.selectAll("*").remove();

  const marginLeft = 50,
    marginBottom = 30;
  const displayData =
    filteredBarData.length > 15
      ? filteredBarData.slice(filteredBarData.length - 15)
      : filteredBarData;
  const maxVal = d3.max(displayData, d => Math.abs(d.earningsChange)) || 1;
  const yScale = d3
    .scaleLinear()
    .domain([-maxVal, maxVal])
    .range([height - marginBottom, 20]);

  // Draw y-axis.
  const yAxis = d3.axisLeft(yScale);
  svg.append("g")
     .attr("transform", `translate(${marginLeft},0)`)
     .call(yAxis);
  // Y-axis label.
  svg.append("text")
     .attr("transform", "rotate(-90)")
     .attr("x", -height / 2)
     .attr("y", 15)
     .attr("text-anchor", "middle")
     .text("Amount Won");

  const xScale = d3
    .scaleBand()
    .domain(displayData.map((d, i) => i))
    .range([marginLeft + 10, width - 10])
    .padding(0.1);

  // Draw x-axis.
  const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => {
    const overallNum =
      filteredBarData.length > 15
        ? d + filteredBarData.length - 15 + 1
        : d + 1;
    return overallNum;
  });
  svg.append("g")
     .attr("transform", `translate(0, ${height - marginBottom})`)
     .call(xAxis);
  // X-axis label.
  svg.append("text")
     .attr("x", width / 2)
     .attr("y", height - 5)
     .attr("text-anchor", "middle")
     .text("Bet Number");

  svg.selectAll("rect")
     .data(displayData, d => d.betNumber)
     .enter()
     .append("rect")
     .attr("x", (d, i) => xScale(i))
     .attr("width", xScale.bandwidth())
     .attr("y", yScale(0))
     .attr("height", 0)
     .attr("fill", d => (d.earningsChange >= 0 ? "green" : "red"))
     .on("mouseover", function (event, d) {
       d3.select("#tooltip")
         .style("display", "block")
         .html(
           `Bet #: ${d.betNumber}<br>Participant: ${d.participant}<br>Bet Amount: $${d.betAmount}<br>Result: ${
             d.earningsChange >= 0 ? "Win" : "Loss"
           } ($${d.earningsChange})`
         );
     })
     .on("mouseout", function () {
       d3.select("#tooltip").style("display", "none");
     })
     .transition()
     .duration(500)
     .attr("y", d =>
       d.earningsChange >= 0 ? yScale(d.earningsChange) : yScale(0)
     )
     .attr("height", d => Math.abs(yScale(d.earningsChange) - yScale(0)));
}

// 2. Cumulative Earnings Line Chart (Second Graph)
function updateLineChart(xDomainOverride) {
  const svg = d3.select("#line-chart svg");
  const width = +svg.attr("width");
  const height = +svg.attr("height");
  svg.selectAll("*").remove();

  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
  let cumulativeData = [];
  let sum = 0;
  betHistory.forEach(d => {
    sum += d.earningsChange;
    cumulativeData.push({ bet: d.betNumber, earnings: sum });
  });
  if (cumulativeData.length === 0) return;

  const totalBets = cumulativeData.length;
  let xDomainStart = totalBets > 15 ? totalBets - 14 : 1;
  let xDomainEnd = totalBets;
  if (xDomainOverride) {
    [xDomainStart, xDomainEnd] = xDomainOverride;
  }

  const xScale = d3
    .scaleLinear()
    .domain([xDomainStart, xDomainEnd])
    .range([margin.left, width - margin.right]);
  const yMin = d3.min(cumulativeData, d => d.earnings);
  const yMax = d3.max(cumulativeData, d => d.earnings);
  const yScale = d3
    .scaleLinear()
    .domain([yMin - 10, yMax + 10])
    .range([height - margin.bottom, margin.top]);

  const xAxis = d3.axisBottom(xScale).ticks(Math.min(15, totalBets));
  svg.append("g")
     .attr("transform", `translate(0, ${height - margin.bottom})`)
     .call(xAxis)
     .append("text")
     .attr("x", width - margin.right)
     .attr("y", -10)
     .attr("fill", "black")
     .style("text-anchor", "end")
     .text("Bet Number");

  const yAxis = d3.axisLeft(yScale);
  svg.append("g")
     .attr("transform", `translate(${margin.left}, 0)`)
     .call(yAxis)
     .append("text")
     .attr("transform", "rotate(-90)")
     .attr("x", -height / 2)
     .attr("y", -margin.left + 15)
     .attr("fill", "black")
     .style("text-anchor", "middle")
     .text("Cumulative Earnings ($)");

  svg.append("line")
     .attr("x1", margin.left)
     .attr("x2", width - margin.right)
     .attr("y1", yScale(0))
     .attr("y2", yScale(0))
     .attr("stroke", "#555")
     .attr("stroke-dasharray", "4");

  for (let i = 0; i < cumulativeData.length - 1; i++) {
    if (cumulativeData[i].bet < xDomainStart) continue;
    const d1 = cumulativeData[i],
      d2 = cumulativeData[i + 1];
    function drawSegment(x1, y1, x2, y2, color) {
      svg.append("line")
         .attr("x1", xScale(x1))
         .attr("y1", yScale(y1))
         .attr("x2", xScale(x2))
         .attr("y2", yScale(y2))
         .attr("stroke", color)
         .attr("stroke-width", 2);
    }
    if (
      (d1.earnings >= 0 && d2.earnings >= 0) ||
      (d1.earnings < 0 && d2.earnings < 0)
    ) {
      const segColor = d1.earnings >= 0 ? "green" : "red";
      drawSegment(d1.bet, d1.earnings, d2.bet, d2.earnings, segColor);
    } else {
      const t =
        d1.bet +
        ((d2.bet - d1.bet) * d1.earnings) / (d1.earnings - d2.earnings);
      const color1 = d1.earnings >= 0 ? "green" : "red";
      drawSegment(d1.bet, d1.earnings, t, 0, color1);
      const color2 = d2.earnings >= 0 ? "green" : "red";
      drawSegment(t, 0, d2.bet, d2.earnings, color2);
    }
  }
  svg.selectAll("circle")
     .data(cumulativeData)
     .enter()
     .append("circle")
     .attr("id", d => "circle-bet-" + d.bet)
     .attr("cx", d => xScale(d.bet))
     .attr("cy", d => yScale(d.earnings))
     .attr("r", 4)
     .attr("fill", "white")
     .attr("stroke", "black")
     .attr("stroke-width", 1)
     .on("mouseover", function (event, d) {
       d3.select("#tooltip")
         .style("display", "block")
         .html(`Bet #: ${d.bet}<br>Cumulative: $${d.earnings}`);
     })
     .on("mouseout", function () {
       d3.select("#tooltip").style("display", "none");
     });

  const brush = d3
    .brushX()
    .extent([
      [margin.left, margin.top],
      [width - margin.right, height - margin.bottom]
    ])
    .on("end", brushed);
  svg.append("g").attr("class", "brush").call(brush);

  function brushed({ selection }) {
    if (!selection) {
      updateLineChart([xDomainStart, xDomainEnd]);
      return;
    }
    const [x0, x1] = selection;
    const newDomain = [
      Math.round(xScale.invert(x0)),
      Math.round(xScale.invert(x1))
    ];
    svg.select(".brush").call(brush.move, null);
    updateLineChart(newDomain);
  }
}


function updateVo2Chart() {
  const svg = d3.select("#vo2-chart svg");
  const width = +svg.attr("width");
  const height = +svg.attr("height");
  svg.selectAll("*").remove();
  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
  if (vo2RunningData.length === 0) return;

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(vo2RunningData, d => d.bet))
    .range([margin.left, width - margin.right]);
  let yMin = Infinity,
    yMax = -Infinity;
  vo2RunningData.forEach(d => {
    ageRanges.forEach(range => {
      yMin = Math.min(yMin, d[range] || 0);
      yMax = Math.max(yMax, d[range] || 0);
    });
  });
  const yScale = d3
    .scaleLinear()
    .domain([yMin - 10, yMax + 10])
    .range([height - margin.bottom, margin.top]);






  // Draw axes.
  const xAxis = d3.axisBottom(xScale);
  svg.append("g")
     .attr("transform", `translate(0, ${height - margin.bottom})`)
     .call(xAxis)
     .append("text")
     .attr("x", width - margin.right)
     .attr("y", -10)
     .attr("fill", "black")
     .style("text-anchor", "end")
     .text("Bet Number");

  const yAxis = d3.axisLeft(yScale);
  svg.append("g")
     .attr("transform", `translate(${margin.left}, 0)`)
     .call(yAxis)
     .append("text")
     .attr("x", 5)
     .attr("y", margin.top)
     .attr("fill", "black")
     .text("VO₂ Running Total");

  const colorScale = d3
    .scaleOrdinal()
    .domain(ageRanges)
    .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]);

  ageRanges.forEach(range => {
    const line = d3
      .line()
      .x(d => xScale(d.bet))
      .y(d => yScale(d[range] || 0))
      .curve(d3.curveMonotoneX);
    svg.append("path")
       .datum(vo2RunningData)
       .attr("fill", "none")
       .attr("stroke", colorScale(range))
       .attr("stroke-width", 2)
       .attr("d", line);
  });

  // Add a legend.
  const legend = svg
    .append("g")
    .attr("transform", `translate(${width - margin.right - 100}, ${margin.top})`);
  ageRanges.forEach((range, i) => {
    legend.append("rect")
          .attr("x", 0)
          .attr("y", i * 20)
          .attr("width", 10)
          .attr("height", 10)
          .attr("fill", colorScale(range));
    legend.append("text")
          .attr("x", 15)
          .attr("y", i * 20 + 10)
          .text(range)
          .attr("font-size", "12px")
          .attr("fill", "black");
  });
}





/***********************
 * Place Bet Function
 ***********************/
function placeBet() {
  const betAmount = parseInt(document.getElementById("bet-amount").value);
  const betChoiceRadio = document.querySelector('input[name="bet-choice"]:checked');
  if (!betAmount || !betChoiceRadio) {
    alert("Please enter a bet amount and select a participant.");
    return;
  }
  const [p1, p2, vo2_1, vo2_2, p1Data, p2Data] = updateParticipants();
  const betOnParticipant1 = betChoiceRadio.value === "1";
  const winningParticipant = betOnParticipant1
    ? (vo2_1 > vo2_2 ? p1 : p2)
    : (vo2_2 > vo2_1 ? p2 : p1);
  const betChosenId = betOnParticipant1 ? p1 : p2;
  const wonBet = winningParticipant === betChosenId;
  const resultText = wonBet ? "You win!" : "You lose!";

  // Calculate profit based on odds.
  // Retrieve the displayed odds value.
  const oddsStr = betChoiceRadio.value === "1"
    ? document.getElementById("odds-1").textContent
    : document.getElementById("odds-2").textContent;
  const oddsNum = parseInt(oddsStr);
  let profit = 0;
  if (wonBet) {
    if (oddsNum > 0) {
      profit = betAmount * (oddsNum / 100);
    } else {
      profit = betAmount * (100 / Math.abs(oddsNum));
    }
  } else {
    profit = -betAmount;
  }

  const earningsChange = profit;
  earnings += earningsChange;

  // Record the bet along with the age range of the participant you bet on.
  const betAgeRange =
    betChoiceRadio.value === "1" ? p1Data.Age_Range : p2Data.Age_Range;
  const betObj = {
    betNumber: betHistory.length + 1,
    participant: betChoiceRadio.value,
    betAgeRange: betAgeRange,
    betAmount: betAmount,
    earningsChange: earningsChange
  };
  betHistory.push(betObj);

  document.getElementById("result").textContent = resultText;
  document.getElementById("earnings").textContent = `Earnings: $${earnings.toFixed(2)}`;
  if (earnings < -10000) {
    if (
      confirm(
        "WARNING: Your total losses have exceeded $10,000. Please consider calling the National Gambling Hotline.\n\nWould you like to be redirected to the hotline website?"
      )
    ) {
      window.open(
        "https://www.cdph.ca.gov/Programs/OPG/Pages/helpline-numbers.aspx#:~:text=If%20gambling%20has%20become%20a,24%2F7%20problem%20gambling%20assistance.",
        "_blank"
      );
    }
  }
  // Update VO₂ running totals.
  ageRunningTotals[p1Data.Age_Range] += p1Data.VO2;
  ageRunningTotals[p2Data.Age_Range] += p2Data.VO2;
  const snapshot = { bet: betHistory.length };
  ageRanges.forEach(range => {
    snapshot[range] = ageRunningTotals[range];
  });
  vo2RunningData.push(snapshot);

  updateBarChart();
  updateLineChart();
  updateVo2Chart();
}


document
  .getElementById("filter-participant1")
  .addEventListener("change", updateBarChart);
document
  .getElementById("filter-participant2")
  .addEventListener("change", updateBarChart);
document.addEventListener("mousemove", function (event) {
  d3.select("#tooltip")
    .style("left", event.pageX + 15 + "px")
    .style("top", event.pageY + 15 + "px");
});



function setVO2Opacity(participantId, opacityLevel) {
  const vo2Element = document.querySelector(`#${participantId} p:first-of-type`);
  if (vo2Element) {
      vo2Element.style.opacity = opacityLevel;
  }
}

// Example usage:
setVO2Opacity("participant1", 0.0); // Set 50% opacity for Participant 1's VO2 Level
setVO2Opacity("participant2", 0.0); // Set 20% opacity for Participant 2's VO2 Level



updateParticipants();



