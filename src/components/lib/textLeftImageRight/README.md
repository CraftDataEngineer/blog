




I - Example 


![img.png](_static/example.png)


II - Code 

```
<TextLeftImageRight containerStyle={classnames(stylesModule.backgroundPrix)}
         title={"Comment financer la formation"}
         ponctuation="?"
         description={
             <div className={classnames(stylesModule.headDescription)}>
                 <h2>
                     Frais de formation : <Chip
                     style={{fontFamily: "CircularStd-Black", fontSize: "24px"}}
                     label="4 000 €"/>
                 </h2>
                 <p>
                     Si vous êtes en recherche d’emploi, la formation peut être prise en charge à
                     100% par Pôle
                     Emploi.
                 </p>
                 <p>
                     Si vous êtes salarié, vous pouvez demander à votre entreprise de vous
                     financer la formation.
                     Le reste à charge peut être échelonné jusqu’à 3 fois.
                 </p>
                 <Link to="/form/" className={classnames(stylesModule.enrollButton)}>
                     <Button variant="contained" startIcon={<PhoneInTalkIcon/>} size="large"
                             style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                         Nous Contacter
                     </Button>
                 </Link>
             </div>
         }
         imageSrc={YourSvg}
         imageStyle={stylesModule.featureSvg}
            />
```