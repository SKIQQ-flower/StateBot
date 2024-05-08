import { Declare, Command, AutoLoad } from "seyfert";


@Declare({
name: "account",
description: "account command"
})
@AutoLoad()
export default class AccountCommand extends Command {}