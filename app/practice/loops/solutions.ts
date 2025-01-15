interface Challenge {
    title: string;
    description: string;
    initialCode: string;
    checkFn: (code: string) => boolean;
    simulateFn?: (code: string) => string[];
    hint: string;
  }
  
  export const challenges: Challenge[] = [
    {
      title: "Basic For Loop",
      description: "Create a loop that runs 5 times and sets the text of each label to 'Hello'",
      initialCode: 
  `// Create a loop that runs 5 times
  // Inside the loop, set the text of each label
  // Example: setProperty("label0", "text", "Hello")
  //         setProperty("label1", "text", "Hello")
  //         And so on...
  
  `,
      checkFn: (code: string) => {
        const normalized = code.replace(/\s+/g, '').toLowerCase();
        
        // Check for proper loop structure
        const hasForLoop = normalized.includes('for(vari=0;i<5;i++)') || 
                          normalized.includes('for(vari=0;i<=4;i++)');
        
        // Check for setProperty with either format
        const hasSetProperty = normalized.includes('setproperty("label"+i,"hello")') ||
                            normalized.includes('setproperty("label"+i,"text","hello")');
        
        return hasForLoop && hasSetProperty;
      },
      simulateFn: (code: string) => {
        return [
          "Loop starts...",
          "i = 0: label0 text set to 'Hello'",
          "i = 1: label1 text set to 'Hello'",
          "i = 2: label2 text set to 'Hello'",
          "i = 3: label3 text set to 'Hello'",
          "i = 4: label4 text set to 'Hello'",
          "Loop complete!"
        ];
      },
      hint: "Start with 'for (var i = 0; i < 5; i++)' and use setProperty with the counter 'i' to change each label"
    }
  ];