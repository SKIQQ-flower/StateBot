import { type CommandContext, Declare, SubCommand, Embed } from "seyfert";
import { User } from "../../db/user";
@Declare({
  name: "create",
  description: "Creates a new bot account"
})

export default class CreateAccount extends SubCommand {
  async run(ctx: CommandContext) {
    const embed = new Embed();
    if (await User.findOne({ id: Number(ctx.interaction.user.id)})) {
      await ctx.write({
        embeds: [
          embed
            .setTitle(':skull: Opa irmãozinho, não é assim')
            .setDescription(`Tu já tem conta nesse bot, rapaz!`)
            .setColor(0x99B2FF)
            .setImage("https://i.imgur.com/dGsxQGu.png")
            .setThumbnail("https://i.imgur.com/bqFduTv.png")
            .toJSON()
        ]
      });
    } else {
      await ctx.write({
        embeds: [
          embed
            .setTitle(':eyes: Eita preula, um membro novo?')
            .setDescription(`A grande matriarca Discord:tm: está respondendo o bot com um delay de milisegundos!`)
            .toJSON()
        ]
      });
    }
  }
}