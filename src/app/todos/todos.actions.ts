import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Crea todo',
    props<{text: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{id: number}>()
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{id: number, text: string}>()
);

export const remove = createAction(
    '[TODO] Delete todo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[TODO] Toggle All todos',
    props<{completed: boolean}>()
);

export const clearAllCompleted = createAction('[TODO] Clear All completed');

