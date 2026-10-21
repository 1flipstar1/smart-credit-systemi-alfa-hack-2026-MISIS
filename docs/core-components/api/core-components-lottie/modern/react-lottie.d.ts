import { type Ref } from 'react';
import { type AnimationConfigWithData, type AnimationConfigWithPath } from 'lottie-web/build/player/lottie_light';
import { type LottieAnimationItem, type LottieDataState } from '@alfalab/core-components-lottie/modern/types';
type UseLottieProps = Omit<AnimationConfigWithPath<'svg'>, 'container' | 'renderer'> | Omit<AnimationConfigWithData<'svg'>, 'container' | 'renderer'>;
export declare function useLottie<T extends Element>(props: UseLottieProps): [ref: Ref<T>, animation: LottieAnimationItem | null, dataState: LottieDataState | null];
export {};
