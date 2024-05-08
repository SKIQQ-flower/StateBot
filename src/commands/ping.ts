import {
  Command,
  Declare,
  Embed,
  Options,
  createBooleanOption,
  type CommandContext
} from 'seyfert';
import { MessageFlags } from 'seyfert/lib/types';

const options = {
  hide: createBooleanOption({
    description: "Hide command output",
  }),
}

@Declare({
  name: 'ping',
  description: 'Show the ping with discord'
})
@Options(options)
export default class PingCommand extends Command {

  async run(ctx: CommandContext<typeof options>) {
    const flags = ctx.options.hide ? MessageFlags.Ephemeral : undefined;
    const embed = new Embed();
    // average latency between shards
    const ping = ctx.client.gateway.latency;

    await ctx.write({
      flags,
      embeds: [
        embed
          .setTitle(':satellite: Delay, ping... Chame do que for')
          .setDescription(`A grande matriarca Discord:tm: está respondendo o bot com um delay de \`${ping}\` milisegundos!`)
          .setColor(0x99B2FF)
          .setImage("https://i.imgur.com/dGsxQGu.png")
          .setThumbnail("https://i.imgur.com/bqFduTv.png")
          .toJSON()
      ]
    });
  }

}