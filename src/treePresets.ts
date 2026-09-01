import type { DeciduousTreeParameters } from './shared/hexengine/ProceduralDecorations';
import {
    BIRCH_TREE_PARAMETERS,
    BROADLEAF_TREE_PARAMETERS,
    PINE_TREE_PARAMETERS,
    SPRUCE_TREE_PARAMETERS,
} from './shared/hexengine/treeModelPresets';

export interface TreePreset {
    id: string;
    name: string;
    variant: string;
    parameters: DeciduousTreeParameters;
    windStrength: number;
}

export const TREE_PRESETS: readonly TreePreset[] = [
    {
        id: 'broadleaf-standard',
        name: '활엽수 · 표준',
        variant: '활엽수 #05',
        windStrength: 1,
        parameters: BROADLEAF_TREE_PARAMETERS,
    },
    {
        id: 'spruce',
        name: '가문비나무',
        variant: '가문비나무 #01',
        windStrength: 1,
        parameters: SPRUCE_TREE_PARAMETERS,
    },
    {
        id: 'pine',
        name: '소나무',
        variant: '소나무 #01',
        windStrength: 1,
        parameters: PINE_TREE_PARAMETERS,
    },
    {
        id: 'birch',
        name: '자작나무',
        variant: '자작나무 #01',
        windStrength: 1,
        parameters: BIRCH_TREE_PARAMETERS,
    },
];
