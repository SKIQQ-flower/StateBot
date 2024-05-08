import { type CommandContext, Declare, SubCommand, Embed, ActionRow, Button, Modal, TextInput } from "seyfert";
import { User } from "../../db/user";
import { ButtonStyle } from "seyfert/lib/types";
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
      const button = new Button()
        .setCustomId('createAccount')
        .setStyle(ButtonStyle.Primary)
        .setLabel('Criar sua conta');
      
      const row = new ActionRow<Button>().setComponents([button]);
      const modal = new Modal();
      modal.setTitle("Sample Modal");
      modal.addComponents(
        new ActionRow<TextInput>()
        .addComponents(new TextInput().setLabel("Qual será seu nome de usuário?").setRequired())
      ));
      
      modal.run((interaction) => {
        
      });
      const json = modal.toJSON();
      await ctx.write({
        embeds: [
          embed
          .setTitle(':eyes: Um membro novo?? Now we are cooking.')
          .setDescription(`É isso mesmo __**Yotsuba**__? temos um cheirosíssimo, excelentíssimo membro...NOVO?`)
          .setColor(0x99B2FF)
          .setImage("https://i.imgur.com/q1SF6F6.png")
          .setThumbnail("https://i.imgur.com/qUSctBP.png")
          .toJSON()
        ],
        components: [
          row
        ]
      });
    }
  }
}