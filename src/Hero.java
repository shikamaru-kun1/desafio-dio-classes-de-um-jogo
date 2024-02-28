// Programa: Classes de um jogo

import java.util.*;

public class Hero {
    private String name;
    private int age;
    private String kind;
    private String weapon;
    private String defense;

    public Hero(String name, int age, String kind, String weapon, String defense){
        this.name = name;
        this.age = age;
        this.kind = kind;
        this.weapon = weapon;
        this.defense = defense;
    }

    public void attack(){
        String msg = "";

        if(this.kind != "fada")
            msg = String.format("O %s, DE NOME %s, ATACOU UTILIZANDO %s\nELE TEM %d ANOS!", this.kind.toUpperCase(), this.name.toUpperCase(), this.weapon.toUpperCase(), this.age);
        else
            msg = String.format("A %s, DE NOME %s, ATACOU UTILIZANDO %s\nELA TEM %d ANOS!", this.kind.toUpperCase(), this.name.toUpperCase(), this.weapon.toUpperCase(), this.age);
        
        System.out.println(msg);
    }

    public void defend(){
        String msg = "";

        if(this.kind != "fada")
            msg = String.format("O %s, DE NOME %s, SE DEFENDEU UTILIZANDO %s\nELE TEM %d ANOS!", this.kind.toUpperCase(), this.name.toUpperCase(), this.defense.toUpperCase(), this.age);
        else
            msg = String.format("A %s, DE NOME %s, SE DEFENDEU UTILIZANDO %s\nELA TEM %d ANOS!", this.kind.toUpperCase(), this.name.toUpperCase(), this.defense.toUpperCase(), this.age);
        
        System.out.println(msg);
    }

    public static boolean castToBoolean(String str, int language){
        if(str == "Y" || str == "y" || str == "S" || str == "s"){
            return true;
        }else
            if(str == "N" || str == "n"){
                return false;
            }else{
                if(language == 1){
                    System.out.println("OPCAO INVALIDA!");
                }else{
                    System.out.println("NON-VALID OPTION!");
                }
    
                return false;
            }
    }

    public static void main(String[] args){
        int language = 0, heroAge = 0;
        boolean answer = true;
        String heroName = "", heroKind = "", heroWeapon = "", heroDefense = "";

        do {
            System.out.println("EM QUE IDIOMA PRETENDE EXECUTAR O PROGRAMA? | WHAT IS THE LANGUAGE YOU WANT TO RUN THE PROGRAM?");
            System.out.println("\n===============================================================================================\n");
            System.out.println("PARA PORTUGUES PRESSIONE A TECLA '1' | FOR ENGLISH TYPE '2'");
            System.out.println("\n===========================================================\n");
            Scanner lerTeclado = new Scanner(System.in);
            language = lerTeclado.nextInt();

            if(language == 1){
                System.out.println("VOCE ESCOLHEU 'PORTUGUES'!");
                System.out.println("\n==========================\n");
                System.out.println("PROGRAMA: ---- CLASSES DE UM JOGO ----");
                System.out.println("\n======================================\n");
                System.out.println("QUAL E O NOME DO HEROI?");
                heroName = lerTeclado.nextLine();
                System.out.println("\n=======================\n");
                System.out.println("QUAL E A IDADE DO HEROI?");
                heroAge = lerTeclado.nextInt();
                System.out.println("\n========================\n");

                if(heroAge > 70){
                    System.out.println("A IDADE DO HERÓI NÃO DEVE SER SUPERIOR À 70 ANOS!");
                    System.out.println("\n=================================================\n");
                }

                System.out.println("QUAL E O TIPO DE HEROI?");
                heroKind = lerTeclado.nextLine();
                System.out.println("\n=======================\n");
                System.out.println("QUAL E O TIPO DE ARMA DO HEROI?");
                heroWeapon = lerTeclado.nextLine();
                System.out.println("\n===============================\n");
                System.out.println("QUAL E O TIPO DE DEFESA DO HEROI?");
                heroDefense = lerTeclado.nextLine();
                System.out.println("\n===============================\n");
                Hero heroInfo = new Hero(heroName, heroAge, heroKind, heroWeapon, heroDefense);
                heroInfo.attack();
                heroInfo.defend();
                System.out.println("\n==============================================================================\n");
                System.out.println("DESEJA REPETIR? S/N");
                answer = castToBoolean(lerTeclado.nextLine(), language);
            }else
                if(language == 2){
                    System.out.println("YOU CHOSE 'ENGLISH'!");
                    System.out.println("\n====================\n");
                    System.out.println("PROGRAM: ---- GAMING CLASSES ----");
                    System.out.println("\n=================================\n");
                    System.out.println("WHAT IS THE NAME OF THE HERO??");
                    heroName = lerTeclado.nextLine();
                    System.out.println("\n==============================\n");
                    System.out.println("WHAT IS THE AGE OF THE HERO?");
                    heroAge = lerTeclado.nextInt();
                    System.out.println("\n============================\n");

                    if(heroAge > 70){
                        System.out.println("THE AGE OF THE HERO CANNOT BE GREATHER THAN 70 YEARS!");
                        System.out.println("\n=====================================================\n");
                    }

                    System.out.println("WHAT IS THE KIND OF THE HERO?");
                    heroKind = lerTeclado.nextLine();
                    System.out.println("\n=============================\n");
                    System.out.println("WHAT IS THE KIND OF WEAPON USED BY THE HERO?");
                    heroWeapon = lerTeclado.nextLine();
                    System.out.println("\n============================================\n");
                    System.out.println("WHAT IS THE KIND OF DEFENSE USED BY THE HERO?");
                    heroDefense = lerTeclado.nextLine();
                    System.out.println("\n=============================================\n");
                    Hero heroInfo = new Hero(heroName, heroAge, heroKind, heroWeapon, heroDefense);
                    heroInfo.attack();
                    heroInfo.defend();
                    System.out.println("\n==============================================================================\n");
                    System.out.println("DO YOU WISH TO REPEAT IT? Y/N");
                    answer = castToBoolean(lerTeclado.nextLine(), language);
                }else{
                    System.out.println("IDIOMA NAO ATRIBUIDO! | NON-ASSIGNED LANGUAGE!");
                }

                lerTeclado.close();
        }while(answer);
    }
}