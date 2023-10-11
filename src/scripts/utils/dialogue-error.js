const DialogueError = {
    init({ btnClose, btnYes, overlay, wrapperDialogue }) {
        btnClose.addEventListener('click', () => {
            this.closeDialogueError(overlay, wrapperDialogue);
        });
        btnYes.addEventListener('click', () => {
            this.closeDialogueError(overlay, wrapperDialogue);
        });
        overlay.addEventListener('click', () => {
            this.closeDialogueError(overlay, wrapperDialogue);
        });
    },

    closeDialogueError(overlay, wrapperDialogue) {
        overlay.classList.add('hidden');
        wrapperDialogue.classList.add('hidden');
    },

    showDialogueError({ overlay, wrapperDialogue }) {
        overlay.classList.remove('hidden');
        wrapperDialogue.classList.remove('hidden');
    }
};

export default DialogueError;
