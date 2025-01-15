interface Challenge {
    title: string;
    description: string;
    initialCode: string;
    checkFn: (code: string) => boolean;
    hint: string;
  }
  
  export const challenges: Challenge[] = [
    {
      title: "Create and Update Variables",
      description: "Create a score variable, set it to 10, then increase it to 20",
      initialCode: 
  `// Create a score variable and set it to 10
  
  // Increase the score by 10
  
  // Print the new score
  console.log("Score: " + score)`,
      checkFn: (code: string) => {
        const normalized = code.replace(/\s+/g, '').toLowerCase();
        const hasVarScore = normalized.includes('varscore=10;');
        const hasIncrease = normalized.includes('score=20;') || normalized.includes('score=score+10;');
        return hasVarScore && hasIncrease;
      },
      hint: "Remember to use 'var' to create your variable. You can increase the score either by setting it to 20 directly or by adding 10 to the current score."
    },
    {
      title: "Working with Lists",
      description: "Create a list and add three items to it",
      initialCode:
  `// Create an empty list called 'items'
  
  // Add three items to your list
  
  // Print your list
  console.log("Items: " + items)`,
      checkFn: (code: string) => {
        // Check for empty list creation
        const hasEmptyList = code.includes('var items = [];');
        
        // Count appendItem calls that match the pattern
        const appendItemMatches = code.match(/appendItem\(items,\s*"[^"]+"\)/g);
        const appendItemCount = appendItemMatches ? appendItemMatches.length : 0;
        
        // Must have empty list and exactly 3 appendItem calls
        return hasEmptyList && appendItemCount === 3;
      },
      hint: "Start with an empty list using var items = []. Then use appendItem() three times to add your items."
    }
  ];