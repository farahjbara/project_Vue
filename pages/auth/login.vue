<template >
  <div class="" style="margin-top:80px!important">
    <img class="image ui centered large " src="/image_it.png" alt="">
    <div class="ui raised very padded text container segment " style="max-width: 500px !important;">
           <h2 class="ui header aligned center prime">Se connecter</h2>

        <!-- <img class="image ui centered tiny " src="/image_it.png" alt=""> -->
        <br>
        <!-- error
        <div class="ui error message">
            <i class="close icon"></i>
            <h4 class="ui header">
              ...
            </h4>
            <ul class="list">

                <li>{{ message_error }}</li>


            </ul>
        </div>
        enderror -->
        <form class="ui form" method="POST" action="">

            <div class="field">
                <label>Votre email</label>
                <input type="text" name="email" value="" required autocomplete="email" autofocus placeholder="saisissez votre adress e-mail">
            </div>
            <div class="field">
                <label>Mot de passe</label>
                <input id="password" type="password" name="password" required autocomplete="current-password" placeholder="*******">
            </div>
            <button class="ui button black fluid" style="color:white" type="submit">se connecter</button>
            <div class="ui divider hiden">

            </div>
            <a class="ui link aligned center ">Mot de passe oublié?</a>
        </form>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
