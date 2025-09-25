Blocks.landingPad.buildType = () => extend(LandingPad.LandingPadBuild, Blocks.landingPad, {accessible: function(){ return true; }})
Events.on(WorldLoadEndEvent, () => {
    Vars.state.rules.revealedBlocks.addAll(Blocks.advancedLaunchPad, Blocks.landingPad);
});
