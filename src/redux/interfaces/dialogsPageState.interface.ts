export interface IDialogsPageState {
    dialogs: IDialog[],
    messages: IMessage[],
    newMessageText: string
}

export interface IDialog {
    id: number,
    name: string
}

export interface IMessage {
    id: number,
    message: string
}