function letteranim()
{
    this.animatedClasses = [];
    this.loopTime = 1000;
    
    this.getAnimatedClasses = function()
    {
        return this.animatedClasses;
    }

    this.addAnimatedClass = function(name, color)
    {
        return this.animatedClasses.push({
            name: name,
            color: color,
            text: document.querySelector(name).innerHTML,
            anims: this.calculateAnims(document.querySelector(name).innerHTML, color),
            currentFrame: 0
        });
    }
    
    this.getLoopTime = function()
    {
        return this.loopTime;
    }
    
    this.setLoopTime = function(time)
    {
        return this.loopTime = time;
    }
    
    this.calculateAnims = function(text, color)
    {
        let letters = [];
        let anims = [];
        for(let i = 0; i < text.length; i++)
        {
            letters.push(text.charAt(i));
        }
        for(let i = 0; i < letters.length; i++)
        {
            var newText = "";
            for(let j = 0; j < letters.length; j++)
            {
                if(i == j)
                {
                    newText += `<span style="color: ${color};">${letters[j]}</span>`;
                }else {
                    newText += letters[j];
                }
            }
            anims.push(newText);
        }
        console.log(anims)
        return anims
    }
    
    this.doAnimate = function()
    {
        setInterval(() => {
            this.animatedClasses.map(c => {
                let element = document.querySelector(c.name);
                if( c.currentFrame > (c.text.length - 1) ) c.currentFrame = 0;
                element.innerHTML = c.anims[c.currentFrame];
                c.currentFrame++;
            })
        }, this.loopTime);
    }
}