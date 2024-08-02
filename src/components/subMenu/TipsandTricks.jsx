import React from "react";

const TipsandTricks = () => {
  const data = [
    {
      id: "01",
      value: "How to Prevent Food From Sticking ? ",
      step1:
        "  Heated oil on a hot pan creates a slick, nonstick surface, guaranteeing a surefire sauté. Do it this way in three easy steps",
      step2:
        " Step 1 : Use a metal spatula to loosen the vegetables or meat, and then push them to one side of the skillet.",
      step3: "Step 2 : Tilt the pan so the empty area is over the heat.",
      step4:
        " Step 3 : Add 1 to 2 tablespoons oil to the empty area and let it get hot before moving the food back.",
    },
    {
      id: "02",
      value: "How to Make Simple Syrup ? ",
      step1:
        " Step 1 : Combine equal parts water and sugar in a saucepan and cook over medium heat, stirring often, until the sugar has completely dissolved (3 to 5 minutes).",
      step2: " Step 2 : Let it cool and then add to beverages as needed.",
      step3:
        " Step 3 :  Use 1½ teaspoons of simple syrup for every teaspoon of sugar you would usually use .",
      step4:
        " Step 4 : store the syrup in the refrigerator for up to 2 weeks. We told you it was simple!",
    },
    {
      id: "03",
      value: "A Cleaner Way to Crack an Egg .",
      step1:
        "  crack the egg on a flat surface, like a counter, to create one clean break. That way, the membrane stays intact, meaning no shell in your scramble. Here's the technique.",
      step2:
        " Step 1. Hold the egg in one hand and tap it firmly on a hard surface.",
      step3:
        "Step 2. Check the break: You should see an indentation and one side-to-side crack, like an equator.",
      step4:
        "Step 3. Place your thumbs on either side of the crack and gently pull the shell apart. Any shards will stick to the membrane, not fall into the bowl.",
    },
    {
      id: "04",
      value: "How to Chop Garlic ? ",
      step1:
        "Love cooking with garlic but hate struggling with sticky, paper-thin peels? With these three steps—trim, crush, chop—you can prep a clove in no time.",
      step2:
        "Step 1. Use the tip of a chef's knife to slice off the hard root of each clove. (This makes the skin peel away more easily.)",
      step3:
        "Step 2. Place a clove under the flat side of the knife, with the blade facing away from you. Press the heel of your palm or your fist down on the knife until you feel the clove give way. Slip off and discard the skin.",
      step4:
        "Step 3. Gather the peeled cloves, hold your knife by the handle, and place your other, nondominant hand on top of the blade. Rock the knife up and down through the cloves (with the tip staying on the cutting board). Chop until the garlic is the size you want.",
    },
    {
      id: "05",
      value: "Cutting Up a Pineapple . ",
      step1:
        " Step 1. With a serrated or chef's knife, cut off the top of the pineapple and a thick slice from the bottom.",
      step2:
        " Step 2. Stand the pineapple upright and, working from top to bottom, cut off the skin in strips, following the shape of the fruit. Use a small paring knife to remove any remaining eyes.",
      step3:
        "Step 3. Cut the pineapple lengthwise into wedges, and then cut out the piece of core from each wedge.",
      step4: "Step 4. Slice or cut the pieces into chunks as desired.",
    },
    {
      id: "06",
      value: "Freezing and Toasting Nuts . ",
      step1:
        " From storing to cooking, here's how to make the most of these tasty little gems.",
      step2:
        "Freeze shelled nuts. To preserve their natural oils, which can turn rancid at room temperature, stow each type of shelled nut separately in the freezer in an airtight, dated container. After a year, it's time to toss them.",
      step3:
        "Roast nuts. Roasting gives nuts more flavor. (Don't be tempted to skip this step in a recipe—the little time it takes has a delicious payoff.) Simply spread them on a rimmed baking sheet and cook in a 350 degree F oven, tossing occasionally, until they're fragrant and their interiors are golden (5 to 10 minutes). Break a nut in half to check.",
      step4:
        "Roasted nuts last 2 to 3 weeks, and are best stored in an airtight container in a cool, dry place. If you need to store them longer, freeze them",
    },
    {
      id: "07",
      value: "How to Slice an Ice Cream Cake ? ",
      step1:
        " Just out of the freezer, an ice cream cake is rock hard and can be impossible to cut. And who wants to wait for ice cream cake to soften? Try this next time.",
      step2:
        " Step 1. Run a chef's knife under very hot water just before slicing.",
      step3:
        "Step 2. Glide the hot blade cleanly and easily through the cold layers.",
      step4: "Step 3. Rewarm the blade as necessary.",
    },
    {
      id: "08",
      value: "Aluminum-Foil Master Class",
      step1:
        "  During grilling season, foil is a cook's secret weapon. Here are three ways to use this marvelous multitasker.",
      step2:
        " Make a packet for delicate foods. Prevent a whole fish or a fragile fillet from sticking to the grate by sealing it in a foil packet. (For flavor, add lemon and herbs.) Pierce the top of the packet several times before placing it on the grill. No flipping necessary.",
      step3:
        "Use as a makeshift grill brush. A clean grate prevents food from sticking. If you don't have a wire brush on hand, crumple a sheet of foil into a ball, hold it with tongs, and use it to scrape off any bits stuck to the grate. Do this while the grill is hot, both before and after cooking.",
      step4:
        "Create a tent for resting meat. Keep a resting steak warm by covering it loosely with foil for 5 to 10 minutes. Resting lets meat continue to cook and then cool down, allowing fibers to plump with juices that would otherwise spill onto your cutting board.",
    },
  ];

  return (
    <>
      <h1 id="trickMenu" style={{ color: "black", margin: "auto" }}>
        Top 08 Kitchen tricks and tips for tasty and delicious food{" "}
      </h1>
      {data.map((step) => (
        <>
          <hr />
          <div id="trickDiv" style={{ color: "black", margin: "auto" }}>
            <h2 style={{ marginTop: "0.5%" }}>{step.id}</h2>
            <h4 style={{ marginTop: "1%" }}>{step.value}</h4>
          </div>
          <p style={{ color: "black", margin: "auto" }}>{step.step1}</p>
          <ul style={{ color: "black", margin: "auto" }}>
            <li style={{ color: "black" }}>{step.step2}</li>
            <li style={{ color: "black", margin: "auto" }}>{step.step3}</li>
            <li style={{ color: "black", marginBottom: "3%" }}>{step.step4}</li>
          </ul>
        </>
      ))}
    </>
  );
};

export default TipsandTricks;
